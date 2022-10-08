import Button from "@mui/material/Button";
import { addToCart } from "../../api";
import Swal from "sweetalert2";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
let AddToCart = ({ meal }) => {
  let { t } = useTranslation();
  let isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  let handleAddToCart = async () => {
    Swal.fire({
      title: t("addToCart.addToCart"),
      input: "number",
      text: "quantity",
      buttons: true,
      dangerMode: true,
    }).then(async (num) => {
      try {
        let data = await addToCart({ _id: meal._id, quantity: num.value });
        Swal.fire({
          title: t("addToCart.added"),
          text: meal.title,
          icon: "success",
        });
      } catch (e) {
        Swal.fire({ title: t("addToCart.failed"), text: meal.title, icon: "error" });
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
