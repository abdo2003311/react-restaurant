import { useState } from "react";
import { getUserOrders } from "../api";

let useUserOrders = () => {
  let [orders, setOrders] = useState([]);
  let [loading, setLoading] = useState(true);
  let fetchData = async () => {
    if (loading) {
      let data = await getUserOrders();
      setOrders(data);
      setLoading(false);
    }
  };
  fetchData();

  return { loading, orders };
};

export default useUserOrders;
