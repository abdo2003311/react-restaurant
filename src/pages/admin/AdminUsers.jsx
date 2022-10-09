import React from "react";
import { Loading } from "../../components";
import { useAdminUsers, useHeight } from "../../hooks";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

let AdminUsers = () => {
  let { users, loading } = useAdminUsers();
  let height = useHeight();
  if (loading) return <Loading width="100" height="100" />;

  return (
    <Box sx={{ height: height, width: "100%" }}>
      <DataGrid
        rows={users.map((user, i) => ({
          id: user._id,
          username: user.username,
          email: user.email,
          date: user.createdAt,
          completedOrders: user.completedOrders.length,
          unCompletedOrders: user.unCompletedOrders.length,
          update: { order: i, user: user },
        }))}
        columns={[
          {
            field: "id",
            headerName: "id",
            width: 150,
          },
          {
            field: "username",
            headerName: "username",
            type: "string",
            sortable: false,
            width: 150,
          },
          {
            field: "email",
            headerName: "email",
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
            type: "number",
            width: 200,
          },
          {
            field: "unCompletedOrders",
            headerName: "Un Completed Orders",
            type: "number",
            width: 200,
          },
          {
            field: "update",
            headerName: "update",
            renderCell: ({ value }) => {
              return (
                <></>
                /*   <>
                <Box mr={2}>
                  <Button
                    color="error"
                    onClick={() =>
                      handleDeletemeal(
                        value.meal.id,
                        value.order,
                        value.meal.title
                      )
                    }
                  >
                    delete
                  </Button>
                </Box>
                <UpdateMeal
                  meal={value.meal}
                  categories={categories}
                  order={value.order}
                />
              </> */
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
  );
};

export default AdminUsers;
