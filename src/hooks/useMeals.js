import { useState } from "react";
import { getMeals } from "../api/menu";

let useMeals = () => {
  let [meals, setMeals] = useState(null);
  let [loading, setLoading] = useState(true);

  let fetchData = async () => {
    if (loading) {
      let data = await getMeals();
      setMeals(data);
      setLoading(false);
    }
  };
  fetchData();

  return { loading, meals };
};

export default useMeals;
