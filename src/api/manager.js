import axios from "axios";

let managerLogin = async ({ username, password }) => {
  let data = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/manager/managerLogin`,
    {
      username: username,
      password: password,
    }
  );
  return data.data.token;
};

let getCompletedOrders = async () => {
  let data = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/manager/orders/completed`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("managerToken")}`,
      },
    }
  );
  return data.data;
};

let getUnCompletedOrders = async () => {
  let data = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/manager/orders/unCompleted`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("managerToken")}`,
      },
    }
  );
  return data.data;
};

let getDeliveryEmpolyees = async () => {
  let data = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/manager/employees`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("managerToken")}`,
      },
    }
  );
  return data.data;
};

let acceptOrder = async ({ order, deliveryEmployee }) => {
  let data = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/manager/acceptOrder`,
    {
      order,
      deliveryEmployee,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("managerToken")}`,
      },
    }
  );
  return data;
};
export {
  managerLogin,
  getCompletedOrders,
  getUnCompletedOrders,
  getDeliveryEmpolyees,
  acceptOrder,
};
