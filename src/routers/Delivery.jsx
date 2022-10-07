import React from "react";
import { Routes, Route } from "react-router-dom";
import { Loading } from "../components";
import { useIsLoggedIn } from "../hooks";
import {
  DeliveryCompletedOrders,
  DeliveryLogin,
  DeliveryUnCompletedOrders,
} from "../pages";

let DeliveryrRouter = ({ socket }) => {
  let { loggedIn, loading } = useIsLoggedIn({
    token: localStorage.getItem("deliveryToken"),
    route: "delivery",
  });
  if (loading) return <Loading width="100" height="100" />;
  if (!loggedIn) return <DeliveryLogin />
  return (
    <Routes>
      <Route
        path="/delivery/completedOrders/"
        element={<DeliveryCompletedOrders socket={socket} />}
      />
      <Route
        path="/delivery/unCompletedOrders/"
        element={<DeliveryUnCompletedOrders socket={socket} />}
      />
    </Routes>
  );
};

export default DeliveryrRouter;
