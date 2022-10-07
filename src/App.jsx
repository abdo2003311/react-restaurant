import * as React from "react";
import NavigationBar from "./components/common/NavigationBar";
import Box from "@mui/material/Box";
import {
  createTheme,
  experimental_sx as sx,
  ThemeProvider,
} from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setLeftToRight } from "./store/features/leftToRight/leftToRight";
import { useTranslation } from "react-i18next";
import { ClientRouter, DeliveryRouter, ManagerRouter } from "./routers";
import { DeliveryNavigation, Footer, ManagerNavigation } from "./components";
import { rtlTextFiled } from "./styles";
import { socketConnect } from "socket.io-react";

let App = ({ socket }) => {
  let darkMode = useSelector((state) => state.darkMode.on);
  let ltr = useSelector((state) => state.leftToRight.ltr);
  let { i18n } = useTranslation();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLeftToRight({ ltr: i18n.language === "ar" ? false : true }));
  });
  let theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      ltr: ltr,
      colors: {
        orange: "#E45826",
        grey: "#E6D5B8",
        yellow: "#F0A500",
        black: "#1B1A17",
        gradient: "linear-gradient(90deg, #E45826, #F0A500)",
      },
      boxShadow: darkMode
        ? ".1vw .1vw 1vw .1vw #000"
        : ".1vw .1vw 1vw .1vw #ccc",
      darkBoxShadow: ".1vw .1vw 1vw .1vw #000",
      lightBoxShadow: ".1vw .1vw 1vw .1vw #ccc",
      fontFamily:
        i18n.language === "ar" ? "Cairo, sans-serif " : "Ubuntu, sans-serif",
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: sx({
            backgroundImage: (theme) => theme.palette.colors.gradient,
          }),
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: sx(rtlTextFiled),
        },
      },
      MuiLink: {
        styleOverrides: {
          root: sx({
            textDecoration: "none",
            color: "inherit",
          }),
        },
      },
    },
  });

  let navigationBar = React.useMemo(() => <NavigationBar />);

  let managerNavigation = React.useMemo(() => (
    <ManagerNavigation routes={<ManagerRouter socket={socket} />} />
  ));
  let deliveryNavigation = React.useMemo(() => (
    <DeliveryNavigation routes={<DeliveryRouter socket={socket} />} />
  ));
  let footer = React.useMemo(() => <Footer />);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          fontFamily: (theme) => theme.palette.fontFamily,
          direction: ltr ? "ltr" : "rtl",
        }}
      >
        {location.pathname.indexOf("manager") === -1 &&
          location.pathname.indexOf("delivery") === -1 &&
          navigationBar}
        {location.pathname.indexOf("manager") > -1 && managerNavigation}
        {location.pathname.indexOf("delivery") > -1 && deliveryNavigation}
        <ClientRouter socket={socket} />
        {location.pathname.indexOf("manager") === -1 &&
          location.pathname.indexOf("delivery") === -1 &&
          footer}
      </Box>
    </ThemeProvider>
  );
};
export default socketConnect(App);
