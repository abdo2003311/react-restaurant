import Grid from "@mui/material/Grid";
import React from "react";
import { useDispatch } from "react-redux";
import { EmployeeOrder, Loading } from "../../components";
import { useEmployeeUnCompletedOrders } from "../../hooks";
import { setOrders } from "../../store/features/orders/ordersSlice";

let DeliveryUnCompletedOrders = ({ socket }) => {
  let { orders, loading } = useEmployeeUnCompletedOrders();
  let dispatch = useDispatch();
  socket.emit("joinMyRoom", { token: localStorage.getItem("deliveryToken") });

  socket.on("givenOrder", (data) => {
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

  return (
    <Grid container width="100">
      {orders.map((order, i) => (
        <EmployeeOrder order={order} socket={socket} key={i} />
      ))}
    </Grid>
  );
};

export default DeliveryUnCompletedOrders;
