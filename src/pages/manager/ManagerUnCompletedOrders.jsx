import Grid from "@mui/material/Grid";
import React from "react";
import { useDispatch } from "react-redux";
import { Loading, ManagerOrder } from "../../components";
import Notification from "../../functions/notification";
import { useDeliveryEmployees, useUnCompletedOrders } from "../../hooks";
import {
  removeOrder,
  setOrders,
} from "../../store/features/orders/ordersSlice";

let ManagerUnCompletedOrders = ({ socket }) => {
  let { orders, loading } = useUnCompletedOrders();
  let employees = useDeliveryEmployees();
  let dispatch = useDispatch();
  socket.on("madeOrder", (data) => {
    dispatch(setOrders({ orders: [...orders, data] }));
  });
  socket.on("completedOrder", (data) => {
    if (!data.error) {
      Notification.fire({
        title: "order completed",
        text: `employee ${data._id}`,
        icon: "success",
      });
      dispatch(removeOrder({ order: data }));
      return;
    }
    Notification.fire({
      title: "failed to complete order",
      text: data.error,
      icon: "error",
    });
  });
  if (loading) return <Loading width="100" height="100" />;
  if (employees.loading) return <Loading width="100" height="100" />;

  return (
    <Grid container width="100">
      {orders.map((order, i) => (
        <ManagerOrder
          order={order}
          socket={socket}
          key={i}
          deliveryEmployees={employees.deliveryEmployees}
        />
      ))}
    </Grid>
  );
};

export default ManagerUnCompletedOrders;
