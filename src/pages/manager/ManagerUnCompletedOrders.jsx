import { Grid } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Loading, ManagerOrder } from "../../components";
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
    console.log(data)
    dispatch(removeOrder({ order: data }));
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
