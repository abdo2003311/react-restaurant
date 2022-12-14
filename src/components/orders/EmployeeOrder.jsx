import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import React from "react";
import OrderMeal from "./OrderMeal";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import PendingIcon from "@mui/icons-material/Pending";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { removeOrder } from "../../store/features/orders/ordersSlice";

let EmployeeOrder = ({ order, socket }) => {
  let { meals, notes, location, status } = order;
  let dispatch = useDispatch();
  let handleComplete = async () => {
    socket.emit("completedOrder", {
      token: localStorage.getItem("deliveryToken"),
      order: order,
    });
    Swal.fire({ title: "completed order", icon: "success" });
    dispatch(removeOrder({ order: order }));
  };
  return (
    <Grid
      item
      xs={12}
      width="100"
      container
      spacing={1}
      sx={{
        boxShadow: (theme) => theme.palette.boxShadow,
        background: (theme) => theme.palette.colors.gradient,
        ".MuiSvgIcon-root": {
          color: "#fff",
        },
        color: "#fff",
        margin: "1vw",
        padding: "1vw",
        "& .orderMeal:first-of-type": {
          marginTop: 2,
        },
        "& .orderMeal": {
          padding: "1vw",
          marginBottom: 1,
          "& img": {
            width: "100%",
          },
        },
      }}
    >
      <Grid item xs={12} md={6}>
        <Typography variant="h5" fontWeight="900" pl={1}>
          MEALS
        </Typography>
        {meals.map((meal, i) => (
          <OrderMeal meal={meal} key={i} />
        ))}
      </Grid>
      <Grid item xs={12} md={6} textTransform="capitalize">
        <Typography variant="h5" fontWeight="900" pl={1}>
          INFO
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              {" "}
              <PendingIcon />{" "}
            </ListItemIcon>
            <ListItemText>{status}</ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              {" "}
              <LocationOnIcon />{" "}
            </ListItemIcon>
            <ListItemText>{location}</ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              {" "}
              <SpeakerNotesIcon />{" "}
            </ListItemIcon>
            <ListItemText>{notes}</ListItemText>
          </ListItem>
          {status !== "completed" && (
            <ListItem>
              <Button
                onClick={handleComplete}
                variant="contained"
                sx={{
                  marginTop: 1,
                  backgroundColor: (theme) => theme.palette.colors.black,
                }}
              >
                complete
              </Button>{" "}
            </ListItem>
          )}
        </List>
      </Grid>
    </Grid>
  );
};

export default EmployeeOrder;
