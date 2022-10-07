import axios from "axios";

let login = async ({ email, password }) => {
  let data = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/users/login`,
    {
      email: email,
      password: password,
    }
  );
  return data.data.token;
};

let isLoggedIn = async ({ token, route }) => {
  let data = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/${route}/isLoggedIn`,
    {
      token: token,
    }
  );
  return data;
};

let register = async ({ email, password, username }) => {
  let data = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/users/register`,
    {
      username: username,
      email: email,
      password: password,
    }
  );
  return data.data.token;
};

let makeOrder = async (order) => {
  let data = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/users/user/makeOrder`,
    order,
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
  return data;
};

let addToCart = async ({ _id, quantity }) => {
  let data = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/users/user/addToCart`,
    { meal: { _id, quantity } },
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
  return data;
};

let getUserCart = async () => {
  let data = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/users/user/cart`,
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
  return data.data;
};

let getUserOrders = async () => {
  let data = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/users/user/orders`,
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
  return data.data;
};

export {
  login,
  isLoggedIn,
  register,
  makeOrder,
  addToCart,
  getUserCart,
  getUserOrders,
};
