import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React from "react";
import AddToCart from "../cart/AddToCart";

let MobileMeal = ({ meal }) => {
  return (
    <Grid container>
      <Grid item xs={5}>
        <Box
          component="img"
          src={meal.img}
          sx={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid item xs={7} p={2} border={"1px solid #ccc"}>
        <Typography gutterBottom variant="h6">
          {meal.title}
        </Typography>
        <Typography color="text.secondary" component="div" fontSize="small">
          RATING :
          <Rating value={meal.rate} readOnly size="small" />
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily:
              "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
          }}
        >
          ${meal.price}
        </Typography>
        <Typography color="text.secondary" component="div">
          {meal.desc}
        </Typography>
        <AddToCart meal={meal} />
      </Grid>
    </Grid>
  );
};

export default MobileMeal;
