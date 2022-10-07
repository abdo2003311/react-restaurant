import { Grid } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Employee, Loading } from "../../components";
import { useDeliveryEmployees } from "../../hooks";
import { completedOrder } from "../../store/features/employees/employeesSlice";

let ManagerEmpolyees = ({ socket }) => {
  let { deliveryEmployees, loading } = useDeliveryEmployees();
  let dispatch = useDispatch();
  socket.on("completedOrder", ({ employee }) => {
    dispatch(completedOrder({ employee: employee }));
  });
  if (loading) return <Loading width="100" height="100" />;
  return (
    <Grid container>
      {deliveryEmployees.map((employee, i) => (
        <Employee employee={employee} key={i} />
      ))}
    </Grid>
  );
};

export default ManagerEmpolyees;
