import { useState } from "react";
import { getMeal } from "../api/menu";

let useMeal = (id) => {
  let [meal, setMeal] = useState({
    price: 0,
  });
  let [loading, setLoading] = useState(true);

  let fetchData = async () => {
    if (loading) {
      let data = await getMeal(id);
      setMeal(data);
      setLoading(false);
    }
  };
  fetchData();

  return { loading, meal };
};

export default useMeal;
