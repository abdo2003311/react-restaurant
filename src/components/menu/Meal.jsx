import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import AddToCart from "../cart/AddToCart";

let Meal = ({ meal }) => {
  return (
    <Card sx={{ margin: "0 2vw 2vw" }}>
      <CardMedia component="img" src={meal.img} sx={{ marginBottom: 0 }} />
      <CardContent>
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
        <br />
        <AddToCart meal={meal} />
      </CardContent>
    </Card>
  );
};

export default Meal;
