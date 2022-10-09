import { useState } from "react";
import { getAdminOrders } from "../../api";

let useAdminOrders = () => {
  let [orders, setOrders] = useState([]);
  let [loading, setLoading] = useState(true);
  let fetchData = async () => {
    if (loading) {
      let data = await getAdminOrders();
      setOrders(data);
      setLoading(false);
    }
  };
  fetchData();

  return { loading, orders };
};

export default useAdminOrders;
