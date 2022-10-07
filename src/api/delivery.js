import axios from "axios";

let deliveryLogin = async ({ username, password }) => {
  let data = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/delivery/login`,
    {
      username: username,
      password: password,
    }
  );
  return data.data.token;
};

let getEmployeeCompletedOrders = async () => {
  let data = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/delivery/orders/completed`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("deliveryToken")}`,
      },
    }
  );
  return data.data;
};

let getEmployeeUnCompletedOrders = async () => {
  let data = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/delivery/orders/unCompleted`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("deliveryToken")}`,
      },
    }
  );
  return data.data;
};

export {
  deliveryLogin,
  getEmployeeUnCompletedOrders,
  getEmployeeCompletedOrders,
};
