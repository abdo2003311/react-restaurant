import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminMeals } from "../../api";
import { setMeals } from "../../store/features/meals/mealsSlice";

let useAdminMeals = () => {
  let meals = useSelector((state) => state.meals.meals);
  let [loading, setLoading] = useState(true);
  let disaptch = useDispatch();
  let fetchData = async () => {
    if (loading) {
      let data = await getAdminMeals();
      disaptch(setMeals({ meals: data }));
      setLoading(false);
    }
  };
  fetchData();

  return { loading, meals };
};

export default useAdminMeals;
