import React from "react";
import { Routes, Route } from "react-router-dom";
import { Loading } from "../components";
import { useIsLoggedIn } from "../hooks";
import { AdminEmployees, AdminLogin, AdminMeals, AdminOrders, AdminUsers } from "../pages";

let AdminRouter = () => {
  let { loggedIn, loading } = useIsLoggedIn({
    token: localStorage.getItem("adminToken"),
    route: "admin",
  });
  if (loading) return <Loading width="100" height="100" />;
  if (!loggedIn) return <AdminLogin />;
  return (
    <Routes>
      <Route path="/admin/meals" element={<AdminMeals />} />
      <Route path="/admin/orders" element={<AdminOrders />} />
      <Route path="/admin/employees" element={<AdminEmployees />} />
      <Route path="/admin/users" element={<AdminUsers />} />

    </Routes>
  );
};

export default AdminRouter;
