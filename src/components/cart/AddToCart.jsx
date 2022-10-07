import Button from "@mui/material/Button";
import { addToCart } from "../../api";
import swal from "sweetalert";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
let AddToCart = ({ meal }) => {
  let { t } = useTranslation();
  let isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  let handleAddToCart = async () => {
    swal({
      title: t("addToCart.addToCart"),
      content: "input",
      buttons: true,
      dangerMode: true,
    }).then(async (num) => {
      try {
        let data = await addToCart({ _id: meal._id, quantity: num });
        swal(t("addToCart.added"), meal.title, "success");
      } catch (e) {
        swal(t("addToCart.failed"), meal.title, "error");
      }
    });
  };
  return (
    <Button onClick={handleAddToCart} disabled={!isLoggedIn}>
      {t("addToCart.addToCart")}
    </Button>
  );
};

export default AddToCart;
