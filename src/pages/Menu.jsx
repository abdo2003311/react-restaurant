import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { Loading, Meal, MobileMeal } from "../components";
import { useMeals, useMobileMenu } from "../hooks";

let Menu = () => {
  let { meals, loading } = useMeals();
  let mobileMenu = useMobileMenu();
  if (loading) return <Loading width="100" height="50" />;
  return (
    <>
      <Box
        component="h1"
        sx={{
          textAlign: "center",
          textTransform: "uppercase",
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        Our Menu
      </Box>
      <Grid container>
        {meals.map((meal, i) => (
          <Grid item xs={mobileMenu ? 12 : 4} key={i}>
            {" "}
            {mobileMenu ? <MobileMeal meal={meal} /> : <Meal meal={meal} />}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Menu;
