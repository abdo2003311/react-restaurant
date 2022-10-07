import React from "react";
import { Routes, Route } from "react-router-dom";
import { Loading } from "../components";
import { useIsLoggedIn } from "../hooks";
import { Account, Cart, Home, Login, Menu, Orders, SignUp } from "../pages";

let ClientRouter = ({ socket }) => {
  const { loggedIn, loading } = useIsLoggedIn({
    token: localStorage.getItem("token"),
    route: "users",
  });
  if (loading) return <Loading width="100" height="100" />;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/signIn" element={<Login />} />
      <Route path="/account" element={loggedIn ? <Account /> : <Login />} />
      <Route
        path="/orders"
        element={loggedIn ? <Orders socket={socket} /> : <Login />}
      />
      <Route
        path="/cart"
        element={loggedIn ? <Cart socket={socket} /> : <Login />}
      />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
};

export default ClientRouter;
