import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompletedOrders, getUnCompletedOrders } from "../../api";
import { setOrders } from "../../store/features/orders/ordersSlice";

let useUnCompletedOrders = () => {
  let orders = useSelector((state) => state.orders.orders);
  let dispatch = useDispatch();
  let [loading, setLoading] = useState(true);
  let fetchData = async () => {
    if (loading) {
      let data = await getUnCompletedOrders();
      dispatch(setOrders({ orders: data }));
      setLoading(false);
    }
  };
  fetchData();

  return { loading, orders };
};

export default useUnCompletedOrders;
