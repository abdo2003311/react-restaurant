import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toggleLeftToRight } from "../../store/features/leftToRight/leftToRight";
import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import MoreVert from "@mui/icons-material/MoreVert";
import More from "@mui/icons-material/More";
const lngs = {
  en: { nativeName: "English" },
  ar: { nativeName: "Arabic" },
};

function AccountMenu() {
  let dispatch = useDispatch();
  let { i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MoreVert sx={{ color: "#fff" }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: i18n.language === "ar" ? 0 : 13,
              left: i18n.language === "ar" ? 18 : "none",
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem component="a" href="/">
          Home
        </MenuItem>
        <MenuItem component="a" href="/menu">
          Menu
        </MenuItem>
        <MenuItem component="a" href="/cart">
          Cart
        </MenuItem>
        <MenuItem component="a" href="/orders">
          Orders
        </MenuItem>
        <MenuItem component="a" href="/signIn">
          Sign-In
        </MenuItem>
        <MenuItem component="a" href="/signUp">
          Sign-Up
        </MenuItem>
        <MenuItem component="a" href="/account">
          Account
        </MenuItem>
        <MenuItem>Logout</MenuItem>
        <Divider />
        {Object.keys(lngs).map((lng) => (
          <MenuItem
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => {
              dispatch(toggleLeftToRight);
              i18n.changeLanguage(lng);
            }}
          >
            {lngs[lng].nativeName}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            TastyFood
          </Typography>
          <AccountMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
