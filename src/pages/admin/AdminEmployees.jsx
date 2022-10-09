import Box from "@mui/material/Box";
import React from "react";
import { CreateEmployee, Loading, UpdateEmployee } from "../../components";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useAdminEmployees, useHeight } from "../../hooks";
import Button from "@mui/material/Button";
import { green, red } from "@mui/material/colors";
import { deleteStorageEmployee } from "../../store/features/employees/employeesSlice";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../../api";
import Swal from "sweetalert2";
let AdminEmployees = () => {
  let height = useHeight();
  let { deliveryEmployees, loading } = useAdminEmployees();
  let dispatch = useDispatch();
  if (loading) return <Loading width="100" height="100" />;
  let handleDeleteEmployee = async (id, order, username) => {
    let data = await deleteEmployee(id);
    dispatch(deleteStorageEmployee({ order: order }));
    if (data.status === 200)
      Swal.fire({ title: `deleted Employee ${username}`, icon: "success" });
    else
      Swal.fire({
        title: `failed to delete Employee ${username}`,
        icon: "error",
      });
  };
  return (
    <>
      <Box m={2}>
        <CreateEmployee />
      </Box>
      <Box sx={{ height: height, width: "100%" }}>
        <DataGrid
          rows={deliveryEmployees.map((employee, i) => ({
            id: employee._id,
            username: employee.username,
            date: employee.createdAt,
            completedOrders: employee.completedOrders.length,
            unCompletedOrders: employee.unCompletedOrders.length,
            update: { order: i, employee: employee },
          }))}
          columns={[
            {
              field: "id",
              headerName: "id",
              width: 100,
            },
            {
              field: "username",
              headerName: "username",
              type: "string",
              sortable: false,
              width: 250,
            },
            {
              field: "date",
              headerName: "date",
              type: "string",
              sortable: false,
              width: 150,
            },
            {
              field: "completedOrders",
              headerName: "completed Orders",
              renderCell: ({ value }) => (
                <Box sx={{ color: green["700"] }}>{value}</Box>
              ),
              type: "number",
              width: 200,
            },
            {
              field: "unCompletedOrders",
              headerName: "Un Completed Orders",
              renderCell: ({ value }) => (
                <Box sx={{ color: red["700"] }}>{value}</Box>
              ),
              type: "number",
              width: 200,
            },
            {
              field: "update",
              headerName: "update",
              renderCell: ({ value }) => {
                return (
                  <>
                    <Box mr={2}>
                      <Button
                        color="error"
                        onClick={() =>
                          handleDeleteEmployee(
                            value.employee._id,
                            value.order,
                            value.employee.username
                          )
                        }
                      >
                        delete
                      </Button>
                    </Box>
                    <UpdateEmployee
                      employee={value.employee}
                      order={value.order}
                    />
                  </>
                );
              },
              sortable: false,
              width: 190,
            },
          ]}
          componentsProps={{
            toolbar: {
              csvOptions: {
                fields: ["id", "category", "title", "count", "rate", "price"],
              },
            },
          }}
          pageSize={10}
          sx={{ width: "100%", overflowX: "auto" }}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          components={{
            Toolbar: GridToolbar,
          }}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
};

export default AdminEmployees;
