import axios from "axios";

let adminLogin = async ({ username, password }) => {
  let data = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/admin/adminLogin`,
    {
      username: username,
      password: password,
    }
  );
  return data.data.token;
};

let getAdminOrders = async () => {
  let data = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/admin/orders/`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    }
  );
  return data.data;
};

let getAdminEmployees = async () => {
  let data = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/admin/employees`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    }
  );
  return data.data;
};

let getAdminUsers = async () => {
  let data = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/admin/users`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    }
  );
  return data.data;
};

let getAdminMeals = async () => {
  let data = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/admin/meals`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    }
  );
  return data.data;
};

let deleteMeal = async (id) => {
  let data = await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/api/admin/meals/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    }
  );
  return data;
};

let deleteEmployee = async (id) => {
  let data = await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/api/admin/employees/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    }
  );
  return data;
};

let createMeal = async (meal) => {
  let data = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/admin/meals/`,
    { meal: meal },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    }
  );
  return data;
};

let createEmployee = async ({ username, password }) => {
  let data = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/admin/employees/`,
    { employee: { username, password } },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    }
  );
  return data;
};

let updateMeal = async (meal) => {
  let data = await axios.put(
    `${process.env.REACT_APP_SERVER_URL}/api/admin/meals/${meal._id}`,
    { newMeal: meal },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    }
  );
  return data;
};

let updateEmpolyee = async (employee) => {
  let data = await axios.put(
    `${process.env.REACT_APP_SERVER_URL}/api/admin/employees/${employee._id}`,
    { newEmployee: employee },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    }
  );
  return data;
};

export {
  adminLogin,
  getAdminOrders,
  getAdminEmployees,
  getAdminUsers,
  getAdminMeals,
  deleteMeal,
  createMeal,
  updateMeal,
  createEmployee,
  deleteEmployee,
  updateEmpolyee,
};
