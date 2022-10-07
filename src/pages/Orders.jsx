import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Loading } from "../components";
import Order from "../components/orders/Order";
import { useHeight, useUserOrders } from "../hooks";

let Orders = ({ socket }) => {
  let height = useHeight();
  socket.emit("joinMyRoom", { token: localStorage.getItem("token") });
  let { orders, loading } = useUserOrders();
  if (loading) return <Loading width="100" height="30" />;
  return (
      <Box sx={{ minHeight : height }}>
        <Box
          component="h1"
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            marginTop: 2,
          }}
        >
          Orders
        </Box>
        <Grid container>
          {orders.unCompletedOrders.map((order, i) => (
            <Order order={order} socket={socket} key={i} />
          ))}
          {orders.completedOrders.map((order, i) => (
            <Order order={order} key={i} />
          ))}
        </Grid>
      </Box>
  );
};

export default Orders;
