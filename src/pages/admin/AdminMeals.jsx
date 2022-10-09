import Box from "@mui/material/Box";
import React from "react";
import { CreateMeal, Loading, UpdateMeal } from "../../components";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Rating from "@mui/material/Rating";
import { blue, green } from "@mui/material/colors";
import { useAdminMeals, useHeight } from "../../hooks";
import { deleteMeal } from "../../api";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteStorageMeal } from "../../store/features/meals/mealsSlice";

let AdminMeals = () => {
  let { meals, loading } = useAdminMeals();
  let height = useHeight();
  let dispatch = useDispatch();
  if (loading) return <Loading width="100" height="100" />;
  let handleDeleteMeal = async (id, order, title) => {
    let data = await deleteMeal(id);
    dispatch(deleteStorageMeal({ order: order }));
    if (data.status === 200)
      Swal.fire({ title: `deleted meal ${title}`, icon: "success" });
    else Swal.fire({ title: `failed to delete meal ${title}`, icon: "error" });
  };
  return (
    <>
      <Box m={2}>
        <CreateMeal />
      </Box>
      <Box sx={{ height: height, width: "100%" }}>
        <DataGrid
          rows={meals.map((meal, i) => ({
            id: meal._id,
            title: meal.title,
            desc: meal.desc,
            date: meal.createdAt,
            rate: meal.rate,
            sold: meal.sold,
            price: meal.price,
            update: { order: i, meal: meal },
          }))}
          columns={[
            {
              field: "id",
              headerName: "id",
              width: 100,
            },
            {
              field: "title",
              headerName: "title",
              type: "string",
              sortable: false,
              width: 500,
            },
            {
              field: "desc",
              headerName: "desc",
              type: "string",
              sortable: false,
              width: 500,
            },
            {
              field: "date",
              headerName: "date",
              type: "string",
              sortable: false,
              width: 500,
            },
            {
              field: "rate",
              headerName: "rate",
              renderCell: ({ value }) => <Rating readOnly value={value} />,
              type: "number",
              width: 150,
            },
            {
              field: "price",
              headerName: "price",
              renderCell: ({ value }) => (
                <Box sx={{ color: green["700"] }}>${value}</Box>
              ),
              type: "number",
              width: 100,
            },
            {
              field: "sold",
              headerName: "sold",
              renderCell: ({ value }) => (
                <Box sx={{ color: blue["700"] }}>{value}</Box>
              ),
              type: "number",
              width: 100,
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
                        onClick={() => {
                          handleDeleteMeal(
                            value.meal._id,
                            value.order,
                            value.meal.title
                          );
                        }}
                      >
                        delete
                      </Button>
                    </Box>
                    <UpdateMeal meal={value.meal} order={value.order} />
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
                fields: [
                  "id",
                  "title",
                  "desc",
                  "sold",
                  "date",
                  "rate",
                  "price",
                ],
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

export default AdminMeals;
