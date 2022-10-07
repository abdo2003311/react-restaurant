import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { useHeight } from "../hooks";
import { register } from "../api";
import { login } from "../store/features/auth/authSlice";
import { useDispatch } from "react-redux";

let SignUp = () => {
  const dispatch = useDispatch();
  let height = useHeight();
  let { t, i18n } = useTranslation();

  let formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
          t("signUpPage.emailErr")
        )
        .required(t("signUpPage.reqField")),
      username: Yup.string()
        .max(10, t("signUpPage.usernameErr1"))
        .min(5, t("signUpPage.usernameErr2"))
        .required(t("signUpPage.reqField")),
      password: Yup.string()
        .max(10, t("signUpPage.passwordErr1"))
        .min(5, t("signUpPage.passwordErr2"))
        .required(t("signUpPage.reqField")),
    }),
    onSubmit: async ({ username, password, email }) => {
      let token = await register({ username, password, email });
      dispatch(login(token));

      if (location.pathname === "/signUp") {
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
        ".MuiButton-root": {
          background: (theme) => theme.palette.colors.gradient,
          color: "#fff",
          fontWeight: 300,
        },
        ".next": {
          mt: 2,
          mb: 2,
          float: i18n.language == "ar" ? "left" : "right",
        },
        ".iAccept": {
          m: 0,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          backgroundColor: (theme) => theme.palette.colors.black,
          color: "#fff",
          padding: "2vw",
          width: "50%",
          [theme.breakpoints.down("md")]: {
            width: "100%",
            height: "100%",
            boxShadow: "none",
            padding: "2vw",
            borderBottom: "1px solid #ccc",
          },
          boxShadow: (theme) => theme.palette.darkBoxShadow,
        })}
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
          {t("signUpPage.title")}
        </Typography>
        <Box component="form" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                fullWidth
                id="email"
                label={t("signUpPage.email")}
                autoComplete="email"
                type="email"
                defaultValue={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                fullWidth
                name="username"
                label={t("signUpPage.username")}
                defaultValue={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                fullWidth
                name="password"
                label={t("signUpPage.password")}
                type="password"
                autoComplete="new-password"
                defaultValue={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label={t("signUpPage.iAccept")}
                className="iAccept"
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            className="next"
            onClick={formik.handleSubmit}
          >
            {t("signUpPage.submit")}
          </Button>
        </Box>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/signIn" variant="body2">
              {t("signUpPage.alreadyHaveAccount")}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default SignUp;
