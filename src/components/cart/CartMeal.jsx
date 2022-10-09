import React, { useEffect, useState } from "react";
import { useMeal } from "../../hooks";
import Delete from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Loading } from "..";
import { useDispatch } from "react-redux";
import {
  changeItemsQuantity,
  deleteItem,
  itemMount,
} from "../../store/features/carts/cartsSilce";
import { useTranslation } from "react-i18next";

let CartMeal = (props) => {
  let { quantity } = props.meal;
  let mealId = props.meal._id;
  let { order } = props;
  let [count, setCount] = useState(quantity);
  let { t } = useTranslation();
  let dispatch = useDispatch();
  let { meal, loading } = useMeal(mealId);
  useEffect(() => {
    if (!loading)
      dispatch(
        itemMount({
          price: Number(meal.price).toFixed(0) * Number(quantity),
        })
      );
  }, [loading]);

  let handleChangeCount = (e) => {
    setCount(e.target.value);
    dispatch(
      changeItemsQuantity({
        quantity: Number(e.target.value),
        mealId: mealId,
        price: Number(meal.price).toFixed(0) * Number(count),
        oneMealPrice: meal.price,
      })
    );
  };

  let handleDeletemeal = () => {
    dispatch(
      deleteItem({
        order: order,
        price: Number(meal.price).toFixed(0) * Number(count),
      })
    );
  };

  if (loading) return <Loading width={100} height={10} />;
  return (
    <>
      <Card className="cartMeal">
        <Grid container>
          <Grid item xs={12} sm={2} justifyContent="center" container p={1}>
            <img src={meal.img} alt="Shopping item" />
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={10}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={12} sm={8}>
              <h5>{meal.title}</h5>
            </Grid>
            <Grid item xs={12} sm={8} color="text.secondary">
              <h5>{meal.desc}</h5>
            </Grid>
            <Grid item xs={6} sm={2} pr={2} pl={2}>
              <TextField
                type="number"
                value={count}
                onChange={handleChangeCount}
                variant="standard"
                inputProps={{ min: 1 }}
              />
            </Grid>
            <Grid item xs={3} sm={1} justifyContent="center" container>
              <h5>${meal.price}</h5>
            </Grid>
            <Grid item xs={3} sm={1}>
              <IconButton onClick={handleDeletemeal}>
                <Delete />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default CartMeal;
