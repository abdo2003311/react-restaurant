import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { login } from "../store/features/auth/authSlice";
import { useHeight } from "../hooks";
import { login as loginReq } from "../api";

let Login = () => {
  const dispatch = useDispatch();
  let { t } = useTranslation();
  let height = useHeight();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
          t("signUpPage.emailErr")
        )
        .required(t("signUpPage.reqField")),
      password: Yup.string()
        .max(10, t("signUpPage.passwordErr1"))
        .min(5, t("signUpPage.passwordErr2"))
        .required(t("signUpPage.reqField")),
    }),
    onSubmit: async (values) => {
      let token = await loginReq(values);
      localStorage.setItem("token", token);
      dispatch(login(token));

      if (location.pathname === "/signIn") {
        location.href = "/";
      }
    },
  });

  return (
    <Grid
      container
      sx={(theme) => ({
        justifyContent: "center",
        alignItems: "center",
        direction: (props) => `${props.palette.ltr ? "ltr" : "rtl"}`,
        height: height,
        [theme.breakpoints.down("md")]: {
          height: "auto",
        },
        ".btn": {
          background: (theme) => theme.palette.colors.gradient,
          color: "#fff",
          fontWeight: 300,
          marginTop: 1,
        },
        "& label, input": {
          color: "#fff",
        },
        backgroundImage:
          'url("https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1500")',
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "-30%",
      })}
    >
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={(theme) => ({
          backgroundColor: (theme) => theme.palette.colors.black,
          color: "#fff",
          padding: "2vw",
          boxShadow: (theme) => theme.palette.darkBoxShadow,
          width: "50%",
          [theme.breakpoints.down("md")]: {
            width: "100%",
            height: "100%",
            boxShadow: "none",
            padding: "2vw",
            borderBottom: "1px solid #ccc",
          },
        })}
        width="35%"
      >
        <Typography
          component="h1"
          variant="h5"
          width="100%"
          textAlign="center"
          sx={{
            fontWeight: 500,
            textTransform: "uppercase",
          }}
        >
          {t("signInPage.title")}
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          type="text"
          label={t("signInPage.email")}
          name="email"
          autoFocus
          defaultValue={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          variant="filled"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label={t("signInPage.password")}
          type="password"
          defaultValue={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          variant="filled"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label={t("signInPage.rememberMe")}
          sx={{ margin: 0 }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="btn"
          sx={{ mt: 1, mb: 2 }}
        >
          {t("signInPage.signInBtn")}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              {t("signInPage.forgot")}
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signUp" variant="body2">
              {t("signInPage.dontHaveAccount")}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Login;
