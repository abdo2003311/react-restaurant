import React from "react";
import CreditCard from "@mui/icons-material/CreditCard";
import Facebook from "@mui/icons-material/Facebook";
import ArrowRight from "@mui/icons-material/ArrowRight";
import WhatsApp from "@mui/icons-material/WhatsApp";
import Instagram from "@mui/icons-material/Instagram";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import { CartMeal, Loading } from "../components";
import { useUpdateCart, useUserCart } from "../hooks";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "@mui/icons-material";
import { cartsStyles } from "../styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { makeOrder } from "../api";
let Cart = ({ socket }) => {

  let { cart, loading } = useUserCart();
  let { meals, price } = cart;
  let { updateCart } = useUpdateCart();
  let { t, i18n } = useTranslation();
  let formik = useFormik({
    initialValues: {
      notes: "",
      location: "",
    },
    validationSchema: Yup.object({
      notes: Yup.string().required(t("signUpPage.reqField")),
      location: Yup.string().required(t("signUpPage.reqField")),
    }),
    onSubmit: async ({ notes, location }) => {
      try {
        let data = await makeOrder({ notes, location });
        if (data.status === 200) {
          socket.emit("makeOrder", data);
          swal(t("cart.madeOrder"), "", "success");
        }
      } catch (e) {
        swal(t("cart.failedToMakeOrder"), "", "error");
      }
    },
  });

  if (loading) return <Loading width="100" height="100" />;

  let handleUpdateCart = () => {
    updateCart({
      variables: {
        id: id,
        input: cart,
      },
    })
      .then((data) => {
        if (!data.errors)
          swal(
            t("cart.updatedCart"),
            `${t("cart.cartNumber")} ${id}`,
            "success"
          );
        else
          swal(
            t("cart.failedToUpdateCart"),
            `${t("cart.cartNumber")} ${id}`,
            "error"
          );
      })
      .catch((err) => {
        swal(
          t("cart.failedToUpdateCart"),
          `${t("cart.cartNumber")} ${id}`,
          "error"
        );
      });
  };
  return (
    <Box sx={cartsStyles}>
      <Box className="cart" id="cart">
        <Box>
          <Grid container justifyContent="space-between">
            <Grid item></Grid>
          </Grid>
          <Grid container>
            <Grid item md={7} sm={12}>
              {meals.map((meal, i) => {
                return <CartMeal key={i} meal={meal} order={i} />;
              })}
              <Button
                onClick={handleUpdateCart}
                variant="contained"
                sx={{ margin: "1vw", marginTop: 0 }}
              >
                {t("cart.save")}
              </Button>
            </Grid>
            <Grid item md={5} sm={12}>
              <Card className="paycard">
                <Box p={1} overflow="hidden">
                  <Grid container justifyContent="space-between" mb={4}>
                    <h2>{t("cart.details")}</h2>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                      style={{ width: "45px" }}
                      alt="Avatar"
                    />
                  </Grid>

                  <Typography paragraph mb={2}>
                    {t("cart.type")}{" "}
                  </Typography>
                  <CreditCard />
                  <Facebook />
                  <WhatsApp />
                  <Instagram />

                  <Box
                    sx={{
                      ".MuiFormControl-root": {
                        marginBottom: 1,
                        marginTop: 1,
                      },
                    }}
                  >
                    <TextField
                      fullWidth
                      type="text"
                      placeholder={t("cart.namePlaceholder")}
                      variant="filled"
                      label={t("cart.name")}
                    />
                    <TextField
                      fullWidth
                      type="text"
                      placeholder={t("cart.numberPlaceholder")}
                      variant="filled"
                      label={t("cart.number")}
                    />
                    <TextField
                      fullWidth
                      type="text"
                      placeholder={t("cart.notesPlaceholder")}
                      variant="filled"
                      label={t("cart.notes")}
                      id="notes"
                      defaultValue={formik.values.notes}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.notes && Boolean(formik.errors.notes)
                      }
                      helperText={formik.touched.notes && formik.errors.notes}
                    />
                    <TextField
                      fullWidth
                      type="text"
                      placeholder={t("cart.locationPlaceholder")}
                      variant="filled"
                      label={t("cart.location")}
                      id="location"
                      defaultValue={formik.values.location}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.location &&
                        Boolean(formik.errors.location)
                      }
                      helperText={
                        formik.touched.location && formik.errors.location
                      }
                    />
                    <FormGroup>
                      <Grid container spacing={1}>
                        <Grid item sm={6} xs={12}>
                          <FormGroup>
                            <TextField
                              type="text"
                              placeholder="MM/YYYY"
                              variant="filled"
                              label={t("cart.expiration")}
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <FormGroup>
                            <TextField
                              type="password"
                              placeholder={t("cart.cvvPlaceholder")}
                              variant="filled"
                              label={t("cart.cvv")}
                            />
                          </FormGroup>
                        </Grid>
                      </Grid>
                    </FormGroup>
                  </Box>

                  <hr />
                  <br />
                  <Grid container justifyContent="space-between" mb={2}>
                    <Grid item>
                      <p>{t("cart.subtotal")}</p>
                    </Grid>
                    <Grid item>
                      <p>
                        $<span>{Number(price)}</span>
                      </p>
                    </Grid>
                  </Grid>

                  <Grid container justifyContent="space-between" mb={2}>
                    <Grid item>
                      <p>{t("cart.delivery")}</p>
                    </Grid>
                    <Grid item>
                      <p>$5.00</p>
                    </Grid>
                  </Grid>

                  <Grid container justifyContent="space-between" mb={2}>
                    <Grid item>
                      <p>{t("cart.total")}</p>
                    </Grid>
                    <Grid item>
                      <p>
                        $<span>{Number(price) + 5}</span>
                      </p>
                    </Grid>
                  </Grid>
                  <Button
                    color="info"
                    className="checkoutButton"
                    variant="contained"
                    onClick={formik.handleSubmit}
                  >
                    <div>
                      $<span>{Number(price) + 5}</span>
                    </div>
                    <span className="check">
                      {t("cart.checkout")}{" "}
                      {i18n.language === "ar" ? <ArrowLeft /> : <ArrowRight />}
                    </span>
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
