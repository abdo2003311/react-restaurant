import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../api";
import { init } from "../store/features/carts/cartsSilce";

let useUserCart = () => {
  let cart = useSelector((state) => state.cart);
  let [loading, setLoading] = useState(true);
  let dispatch = useDispatch();
  let fetchData = async () => {
    if (loading) {
      let data = await getUserCart();
      dispatch(init(data));
      setLoading(false);
    }
  };
  fetchData();

  return { loading, cart };
};

export default useUserCart;
