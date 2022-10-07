import { Grid } from "@mui/material";
import React from "react";
import { Loading, Order } from "../../components";
import { useEmployeeCompletedOrders } from "../../hooks";

let DeliveryCompletedOrders = ({ socket }) => {
  let { orders, loading } = useEmployeeCompletedOrders();
  if (loading) return <Loading width="100" height="100" />;

  return (
    <Grid container width="100">
      {orders.map((order, i) => (
        <Order order={order} socket={socket} key={i} />
      ))}
    </Grid>
  );
};

export default DeliveryCompletedOrders;
