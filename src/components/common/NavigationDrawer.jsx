import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function NavigationDrawer({ routes, links, menu  }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { i18n } = useTranslation();

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      margin: 0,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: theme.palette.ltr ? `${drawerWidth}px` : 0,
        marginRight: theme.palette.ltr ? 0 : `${drawerWidth}px`,
      }),
    })
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: theme.palette.ltr ? `${drawerWidth}px` : 0,
      marginRight: theme.palette.ltr ? 0 : `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  let appBar = React.useMemo(
    () => (
      <AppBar
        position="fixed"
        open={open}
        sx={{
          ".MuiButtonBase-root": {
            margin: "0 .1vw",
          },
          ".MuiTypography-root": {
            margin: "0 .5vw",
          },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            {menu}

            <Typography variant="h6" noWrap component="div">
              TastyFood
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    ),
    [open]
  );

  let drawer = React.useMemo(
    () => (
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor={theme.palette.ltr ? "left" : "right"}
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.palette.ltr ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {links.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              onClick={() => {
                location.href = item.link;
              }}
            >
              <ListItemButton>
                <ListItemIcon>{item.Icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    ),
    [open]
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {appBar}
      <Main open={open}>
        <DrawerHeader />
        {routes}
      </Main>
      {drawer}
    </Box>
  );
}
