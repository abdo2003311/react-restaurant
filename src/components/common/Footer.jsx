import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import WhatsApp from "@mui/icons-material/WhatsApp";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import ImageGallery from "react-image-gallery";

let Footer = () => {
  let { t, i18n } = useTranslation();
  let Arrow = () =>
    i18n.language === "ar" ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />;
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.colors.black,
        color: "#fff",
        zIndex: 10000,
        ".MuiLink-root": {
          color: "#fff",
        },
        img: {
          width: "100%",
        },
        ".MuiGrid-grid-xs-12": {
          padding: "1vw",
        },
        "& .content": {
          fontSize: "15px",
          marginBottom: 2,
          marginTop: 4,
        },
        ".social": {
          ".MuiSvgIcon-root": {
            padding: ".5vw",
            width: "35px",
            height: "35px",
            background: "#222",
          },
        },
        ".navigate": {
          ".MuiSvgIcon-root": {
            color: (theme) => theme.palette.colors.orange,
            width: "10px",
            height: "10px",
          },
        },
      }}
    >
      <Grid container sx={{ padding: "3vw 3vw 0vw 3vw" }}>
        <Grid item xs={12} md={3}>
          <Typography component="h5" variant="h5">
            {t("footer.about")}
          </Typography>
          <Box
            sx={{
              marginTop: 1,
              width: "20%",
              height: "2px",
              backgroundColor: (theme) => theme.palette.colors.orange,
            }}
          ></Box>
          <Typography component="p" variant="p" className="content">
            {t("footer.loremIpsum")}
          </Typography>
          <Box
            sx={({ breakpoints }) => ({
              display: "flex",
              justifyContent: "space-between",
              width: "70%",
              [breakpoints.down("md")]: {
                width: "15%",
              },
            })}
            className="social"
          >
            <Facebook />
            <Instagram />
            <WhatsApp />
            <Twitter />
          </Box>
        </Grid>
        <Grid item xs={12} md={2} className="navigate">
          <Typography component="h5" variant="h5">
            {t("footer.navigation")}
          </Typography>
          <Box
            sx={{
              marginTop: 1,
              width: "20%",
              height: "2px",
              backgroundColor: (theme) => theme.palette.colors.orange,
            }}
          ></Box>
          <Box
            sx={{
              marginTop: 3,
              ".MuiBox-root": {
                padding: "1vw 0",
              },
              ".MuiListItemIcon-root": {
                marginRight: i18n.language === "ar" ? 0 : "2vw",
                marginLeft: i18n.language === "ar" ? "2vw" : 0,
                minWidth: "auto",
              },
              ".MuiListItem-root": {
                padding: ".5vw 0",
              },
            }}
          >
            <List disablePadding>
              <ListItem>
                <ListItemIcon>
                  <Arrow />
                </ListItemIcon>
                <Link href="/"> {t("footer.home")}</Link>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Arrow />
                </ListItemIcon>
                <Link href="/menu">{t("footer.menu")}</Link>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Arrow />
                </ListItemIcon>
                <Link href="/signUp">{t("footer.signUp")}</Link>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Arrow />
                </ListItemIcon>
                <Link href="/signIn">{t("footer.signIn")}</Link>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            "& p": { padding: "0 1vw" },
            "& span": {
              color: "#777",
              display: "block",
              padding: "0.7vw 1vw",
            },
          }}
        >
          <Typography component="h5" variant="h5">
            {t("footer.recentMeals")}
          </Typography>
          <Box
            sx={{
              marginTop: 1,
              width: "20%",
              height: "2px",
              backgroundColor: (theme) => theme.palette.colors.orange,
            }}
          ></Box>
          <Grid container className="content">
            <Grid container>
              <Grid item xs={4}>
                <Box
                  component="img"
                  src="https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </Grid>
              <Grid item xs={8}>
                <Typography component="p" variant="p">
                  {t("footer.smallLorem")}
                </Typography>
                <Typography component="span"> {t("footer.date")}</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <Box
                  component="img"
                  src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </Grid>
              <Grid item xs={8}>
                <Typography component="p" variant="p">
                  {t("footer.smallLorem")}{" "}
                </Typography>
                <Typography component="span"> {t("footer.date")} </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>{" "}
        <Grid item xs={12} md={3}>
          <Typography component="h5" variant="h5">
            {t("footer.photoGallery")}{" "}
          </Typography>
          <Box
            sx={{
              marginTop: 1,
              width: "20%",
              height: "2px",
              backgroundColor: (theme) => theme.palette.colors.orange,
            }}
          ></Box>
          <Box className="content">
            <ImageGallery
              items={images}
              showNav={false}
              showPlayButton={false}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          background: "#111",
          display: "flex",
          justifyContent: "space-between",
          padding: "2vw 4vw !important",
        }}
      >
        <p> {t("footer.copyright")} </p>
        <p>{t("footer.by")}</p>
      </Grid>
    </Box>
  );
};

export default Footer;
