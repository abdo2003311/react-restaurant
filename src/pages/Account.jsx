import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import History from "@mui/icons-material/History";
import CreditCard from "@mui/icons-material/CreditCard";
import AccountBox from "@mui/icons-material/AccountBox";
import useHeight from "../hooks/useHeight";
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

let Account = () => {
  let [active, setActive] = React.useState(0);
  let height = useHeight();
  let { t, i18n } = useTranslation();

  let formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      city: "",
      street: "",
      zipcode: "",
      username: "",
      password: "",
      number: undefined,
      lat: undefined,
      long: undefined,
      phone: undefined,
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(20, t("signUpPage.fnameErr1"))
        .min(3, t("signUpPage.fnameErr2"))
        .required(t("signUpPage.reqField")),
      lastname: Yup.string()
        .max(20, t("signUpPage.lnameErr1"))
        .min(3, t("signUpPage.lnameErr1"))
        .required(t("signUpPage.reqField")),
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
          t("signUpPage.emailErr")
        )
        .required(t("signUpPage.reqField")),
      city: Yup.string()
        .max(20, t("signUpPage.cityErr1"))
        .min(3, t("signUpPage.cityErr2"))
        .required(t("signUpPage.reqField")),
      street: Yup.string()
        .max(20, t("signUpPage.streetErr1"))
        .min(3, t("signUpPage.streetErr2"))
        .required(t("signUpPage.reqField")),
      username: Yup.string()
        .max(10, t("signUpPage.usernameErr1"))
        .min(5, t("signUpPage.usernameErr2"))
        .required(t("signUpPage.reqField")),
      password: Yup.string()
        .max(10, t("signUpPage.passwordErr1"))
        .min(5, t("signUpPage.passwordErr2"))
        .required(t("signUpPage.reqField")),
      long: Yup.number().required(t("signUpPage.reqField")),
      lat: Yup.number().required(t("signUpPage.reqField")),
      phone: Yup.number().required(t("signUpPage.reqField")),
      zipcode: Yup.string().required(t("signUpPage.reqField")),
      number: Yup.number().required(t("signUpPage.reqField")),
    }),
    onSubmit: async () => {},
  });
  return (
    <Grid container>
      <Grid item xs={3} sx={{ border: "1px solid #ccc" }}>
        {" "}
        <Box
          sx={{
            bgcolor: "background.paper",
            zIndex: 0,
            minHeight: height,
            height: "auto",
          }}
        >
          <List>
            <ListItem disablePadding onClick={() => setActive(0)}>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Account info" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => setActive(1)}>
              <ListItemButton>
                <ListItemIcon>
                  <History />
                </ListItemIcon>
                <ListItemText primary="History" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => setActive(2)}>
              <ListItemButton>
                <ListItemIcon>
                  <CreditCard />
                </ListItemIcon>
                <ListItemText primary="Payment" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Grid>
      <Grid item xs={9} p={2}>
        {active === 0 && (
          <>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="filled"
                    autoComplete="given-name"
                    name="firstname"
                    required
                    fullWidth
                    label={t("signUpPage.firstname")}
                    autoFocus
                    defaultValue={formik.values.firstname}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.firstname &&
                      Boolean(formik.errors.firstname)
                    }
                    helperText={
                      formik.touched.firstname && formik.errors.firstname
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="filled"
                    required
                    fullWidth
                    label={t("signUpPage.lastname")}
                    name="lastname"
                    autoComplete="family-name"
                    defaultValue={formik.values.lastname}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.lastname && Boolean(formik.errors.lastname)
                    }
                    helperText={
                      formik.touched.lastname && formik.errors.lastname
                    }
                  />
                </Grid>
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
              </Grid>
            </Box>
            <Box component="form" noValidate mt={2}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="filled"
                    required
                    fullWidth
                    id="city"
                    name="city"
                    label={t("signUpPage.city")}
                    autoFocus
                    defaultValue={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="filled"
                    required
                    fullWidth
                    name="street"
                    label={t("signUpPage.street")}
                    defaultValue={formik.values.street}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.street && Boolean(formik.errors.street)
                    }
                    helperText={formik.touched.street && formik.errors.street}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="filled"
                    required
                    type="number"
                    fullWidth
                    id="long"
                    name="long"
                    label={t("signUpPage.long")}
                    defaultValue={formik.values.long}
                    onChange={formik.handleChange}
                    error={formik.touched.long && Boolean(formik.errors.long)}
                    helperText={formik.touched.long && formik.errors.long}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="filled"
                    required
                    type="number"
                    fullWidth
                    name="lat"
                    label={t("signUpPage.lat")}
                    defaultValue={formik.values.lat}
                    onChange={formik.handleChange}
                    error={formik.touched.lat && Boolean(formik.errors.lat)}
                    helperText={formik.touched.lat && formik.errors.lat}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="filled"
                    required
                    fullWidth
                    type="number"
                    name="number"
                    label={t("signUpPage.number")}
                    defaultValue={formik.values.number}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.number && Boolean(formik.errors.number)
                    }
                    helperText={formik.touched.number && formik.errors.number}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="filled"
                    required
                    fullWidth
                    label={t("signUpPage.zipcode")}
                    name="zipcode"
                    defaultValue={formik.values.zipcode}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.zipcode && Boolean(formik.errors.zipcode)
                    }
                    helperText={formik.touched.zipcode && formik.errors.zipcode}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    variant="filled"
                    required
                    fullWidth
                    type="number"
                    label={t("signUpPage.phone")}
                    name="phone"
                    defaultValue={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box component="form" noValidate mt={2}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
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
                    helperText={
                      formik.touched.username && formik.errors.username
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
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
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                className="next"
                onClick={formik.handleSubmit}
                sx={{ marginTop: 2 }}
              >
                {t("signUpPage.submit")}
              </Button>
            </Box>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Account;
