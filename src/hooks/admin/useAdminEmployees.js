import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminEmployees } from "../../api";
import { setEmployees } from "../../store/features/employees/employeesSlice";

let useAdminEmployees = () => {
  let deliveryEmployees = useSelector(
    (state) => state.employees.deliveryEmployees
  );
  let [loading, setLoading] = useState(true);
  let dispatch = useDispatch();
  let fetchData = async () => {
    if (loading) {
      let data = await getAdminEmployees();
      dispatch(setEmployees({ employees: data }));
      setLoading(false);
    }
  };
  fetchData();

  return { loading, deliveryEmployees };
};

export default useAdminEmployees;
