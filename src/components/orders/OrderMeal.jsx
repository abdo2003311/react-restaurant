import React from "react";
import { useMeal } from "../../hooks";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Loading } from "..";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";

let OrderMeal = ({ meal: { quantity, _id } }) => {
  let { t } = useTranslation();
  let { meal, loading } = useMeal(_id);

  if (loading) return <Loading width={100} height={10} />;
  return (
    <>
      <Card className="orderMeal">
        <Grid container spacing={1}>
          <Grid item xs={12} md={4} justifyContent="center" container>
            <img src={meal.img} alt="Shopping item" style={{ width: "100%" }} />
          </Grid>
          <Grid container item md={6}>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: "700" }}>
                {meal.title}
              </Typography>
              <Typography color="text.secondary" fontSize="smaller">
                {meal.desc}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            md={2}
            sx={{
              fontWeight: "900",
              fontSize: "34px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              color: (theme) => theme.palette.colors.orange,
            }}
          >
            {quantity}
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default OrderMeal;
