import Box from "@mui/material/Box";
import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Loading, Order } from "../../components";
import { useAdminOrders, useHeight } from "../../hooks";

let AdminOrders = ({ socket }) => {
  let height = useHeight();

  let { orders, loading } = useAdminOrders();
  if (loading) return <Loading width="100" height="100" />;

  return (
    <Box sx={{ height: height, width: "100%" }}>
      <DataGrid
        rows={orders.map((order, i) => ({
          userId: order.userId,
          id: order._id,
          meals: order.meals.length,
          date: order.createdAt,
          status: order.status,
          location: order.location,
        }))}
        columns={[
          {
            field: "id",
            headerName: "id",
            width: 100,
          },
          {
            field: "userId",
            headerName: "userId",
            width: 100,
          },
          {
            field: "date",
            headerName: "date",
            type: "string",
            sortable: false,
            width: 150,
          },
          {
            field: "status",
            headerName: "status",
            type: "string",
            sortable: false,
            width: 150,
          },
          {
            field: "location",
            headerName: "location",
            type: "string",
            sortable: false,
            width: 250,
          },
          {
            field: "meals",
            headerName: "meals",
            type: "number",
            width: 150,
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

export default AdminOrders;
