import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeliveryEmpolyees } from "../../api";
import { setEmployees } from "../../store/features/employees/employeesSlice";

let useDeliveryEmployees = () => {
  let deliveryEmployees = useSelector(
    (state) => state.employees.deliveryEmployees
  );
  let [loading, setLoading] = useState(true);
  let dispatch = useDispatch();
  let fetchData = async () => {
    if (loading) {
      let data = await getDeliveryEmpolyees();
      dispatch(setEmployees({ employees: data }));
      setLoading(false);
    }
  };
  fetchData();

  return { loading, deliveryEmployees };
};

export default useDeliveryEmployees;
