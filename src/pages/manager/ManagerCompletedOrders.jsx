import { Grid } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Loading, Order } from "../../components";
import { useCompletedOrders } from "../../hooks";
import { setOrders } from "../../store/features/orders/ordersSlice";

let ManagerCompletedOrders = ({ socket }) => {
  let { orders, loading } = useCompletedOrders();
  let dispatch = useDispatch();
  socket.on("madeOrder", (data) => {
    dispatch(setOrders({ orders: [...orders, data] }));
  }); 
  if (loading) return <Loading width="100" height="100" />;

  return (
    <Grid container width="100">
      {orders.map((order, i) => (
        <Order order={order} socket={socket} key={i} />
      ))}
    </Grid>
  );
};

export default ManagerCompletedOrders;
