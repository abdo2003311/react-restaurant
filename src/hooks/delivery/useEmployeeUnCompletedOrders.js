import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeUnCompletedOrders } from "../../api";
import { setOrders } from "../../store/features/orders/ordersSlice";

let useEmployeeUnCompletedOrders = () => {
  let orders = useSelector((state) => state.orders.orders);
  let dispatch = useDispatch();
  let [loading, setLoading] = useState(true);
  let fetchData = async () => {
    if (loading) {
      let data = await getEmployeeUnCompletedOrders();
      dispatch(setOrders({ orders: data }));
      setLoading(false);
    }
  };
  fetchData();

  return { loading, orders };
};

export default useEmployeeUnCompletedOrders;
