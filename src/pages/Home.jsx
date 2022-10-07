import { ArrowDownward } from "@mui/icons-material";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { homeStyles } from "../styles";
import { Loading, Meal } from "../components";
import { useHeight, useIsLoggedIn, useMeals, useSLidesToShow } from "../hooks";
import { useSelector } from "react-redux";

let Header = () => {
  let { t } = useTranslation();
  let height = useHeight();
  return (
    <Box
      sx={{
        backgroundImage: (theme) => theme.palette.colors.gradient,
        height: height,
        width: "100vw",
        color: "#fff !important",
        position: "relative",
        ".downward": {
          position: "absolute",
          bottom: "1vw",
          left: "50%",
          transform: "translate(-50%)",
          zIndex: 100000,
          color: "#fff !important",
        },
        ".welcome": {
          position: "absolute",
          top: "20%",
          zIndex: 1,
          padding: "0 5vw",
          h4: {
            fontWeight: 100,
          },
          h1: {
            fontWeight: 800,
            fontSize: "40px",
          },
          ".readMore": {
            background: (theme) => theme.palette.colors.black,
            color: "#fff",
            fontWeight: 300,
            marginTop: 1,
            width: "20%",
          },
        },
      }}
    >
      <Box className="welcome">
        <Box component="h4">{t("header.h4")}</Box>
        <Box component="h1">{t("header.h1")}</Box>
        <Button variant="contained" className="readMore">
          {t("header.menu")}
        </Button>
      </Box>
      <IconButton
        className="downward"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight + 10,
            behavior: "smooth",
          });
        }}
      >
        <ArrowDownward />
      </IconButton>
    </Box>
  );
};
let AboutUs = () => {
  let { t } = useTranslation();
  return (
    <Grid item xs={12} container sx={homeStyles.info}>
      <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
        <Box
          component="img"
          src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1500"
        />
      </Grid>
      <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} className="info">
        <Box component="h1">{t("home.aboutUs.h1")}</Box>
        <Box component="h4">{t("home.aboutUs.h4")} </Box>
        <br />
        <Typography> {t("home.aboutUs.loremIpsum")}</Typography>
        <Button variant="contained">{t("home.aboutUs.btn")}</Button>
      </Grid>
    </Grid>
  );
};
let CreateAccount = () => {
  let { t } = useTranslation();
  return (
    <Grid item xs={12} container sx={homeStyles.info}>
      <Grid item xs={12} md={6} className="info">
        <Box component="h1">{t("home.createAccount.h1")}</Box>
        <Box component="h4">{t("home.createAccount.h4")}</Box>
        <br />
        <Typography>{t("home.createAccount.loremIpsum")}</Typography>
        <Button variant="contained" color="warning">
          {t("home.createAccount.btn")}{" "}
        </Button>
      </Grid>
      <Grid item xs={12} md={6} className="img">
        <Box
          component="img"
          src="https://images.pexels.com/photos/2282528/pexels-photo-2282528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1500"
        />
      </Grid>
    </Grid>
  );
};
let Offers = () => {
  let { meals, loading } = useMeals();
  let slidesToShow = useSLidesToShow();

  if (loading) return <Loading width="100" height="50" />;
  return (
    <Grid
      item
      xs={12}
      container
      sx={{ backgroundImage: (theme) => theme.palette.colors.gradient }}
    >
      <Grid item xs={12} p={2}>
        <Box
          component="h1"
          sx={{
            textAlign: "center",
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          Offers
        </Box>
      </Grid>

      <Swiper
        style={{ paddingBottom: "2vw" }}
        modules={[Pagination]}
        spaceBetween={5}
        slidesPerView={slidesToShow}
        pagination={{ clickable: true }}
      >
        {meals.map((meal) => (
          <SwiperSlide>
            <Meal meal={meal} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
};
let Home = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <CreateAccount />
      <Offers />
    </>
  );
};

export default Home;
