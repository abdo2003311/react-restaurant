import axios from "axios";

let getMeals = async () => {
  let data = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/meals`);
  return data.data;
};

let getMeal = async (id) => {
  let data = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/meals/${id}`);
  return data.data;
};

export { getMeals, getMeal };
