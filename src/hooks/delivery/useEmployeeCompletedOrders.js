import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrders } from "../../store/features/orders/ordersSlice";
import { getEmployeeCompletedOrders } from "../../api";

let useEmployeeCompletedOrders = () => {
  let orders = useSelector((state) => state.orders.orders);
  let dispatch = useDispatch();
  let [loading, setLoading] = useState(true);
  let fetchData = async () => {
    if (loading) {
      let data = await getEmployeeCompletedOrders();
      dispatch(setOrders({ orders: data }));
      setLoading(false);
    }
  };
  fetchData();

  return { loading, orders };
};

export default useEmployeeCompletedOrders;
