import React from "react";
import { Routes, Route } from "react-router-dom";
import { Loading } from "../components";
import { useIsLoggedIn } from "../hooks";
import {
  ManagerCompletedOrders,
  ManagerEmployees,
  ManagerLogin,
  ManagerOrders,
  ManagerUnCompletedOrders,
} from "../pages";

let ManagerRouter = ({ socket }) => {
  let { loggedIn, loading } = useIsLoggedIn({
    token: localStorage.getItem("managerToken"),
    route: "manager",
  });
  if (loading) return <Loading width="100" height="100" />;
  if (!loggedIn) return <ManagerLogin />;
  return (
    <Routes>
      <Route
        path="/manager/completedOrders/"
        element={<ManagerCompletedOrders socket={socket} />}
      />
      <Route
        path="/manager/unCompletedOrders"
        element={<ManagerUnCompletedOrders socket={socket} />}
      />
      <Route
        path="/manager/employees"
        element={<ManagerEmployees socket={socket} />}
      />
    </Routes>
  );
};

export default ManagerRouter;
