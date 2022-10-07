import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

let Employee = ({ employee }) => {
  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          margin: 2,
          boxShadow: (theme) => theme.palette.boxShadow,
          padding: ".5vw",
          background: (theme) => theme.palette.colors.yellow,
          textAlign: "center",
          color: "#fff !important",
        }}
      >
        {" "}
        <Typography variant="h5" fontWeight="900">
          {employee.username}
        </Typography>
        <Typography variant="h6" fontWeight="400">
          Uncompleted Orders : {employee.unCompletedOrders.length}
        </Typography>
        <Typography variant="h6" fontWeight="400">
          Completed Orders : {employee.completedOrders.length}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Employee;
