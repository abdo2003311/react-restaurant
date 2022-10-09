import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import React, { useState } from "react";
import OrderMeal from "./OrderMeal";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import PendingIcon from "@mui/icons-material/Pending";
import { useDispatch } from "react-redux";
import {
  removeOrder,
  updateOrder,
} from "../../store/features/orders/ordersSlice";
import Notification from "../../functions/notification";

let ManagerOrder = ({ order, socket, deliveryEmployees }) => {
  let { meals, notes, location, status } = order;
  let [deliveryEmployee, setDeliveryEmployee] = useState("");
  let dispatch = useDispatch();

  const handleDeliveryEmployeesChange = (event) => {
    setDeliveryEmployee(event.target.value);
  };
  socket.on("completedOrder", (data) => {
    dispatch(removeOrder({ order: data }));
  });

  socket.on("acceptedOrder", (data) => {
    if (!data.error) {
      Notification.fire({
        title: "accepted order",
        text: `delivery employee ${data.employee.username}`,
        icon: "success",
      });
      dispatch(updateOrder({ order: data.order }));
      return;
    }
    Notification.fire({
      title: "failed to accept order",
      text: data.error,
      icon: "error",
    });
  });

  let handleAccept = async () => {
    let employee = deliveryEmployees.filter(
      (e) => e.username === deliveryEmployee
    );
    if (deliveryEmployee === "") {
      Notification.fire({
        title: "failed to accept order",
        text: "please choose delivery employee",
        icon: "error",
      });
      return;
    }
    if (order.status === "accepted") {
      Notification.fire({
        title: "failed to accept order",
        text: "already accepted",
        icon: "error",
      });
      return;
    }
    socket.emit("acceptOrder", {
      token: localStorage.getItem("managerToken"),
      order: order,
      deliveryEmployee: employee[0],
    });
  };

  let handleReject = async () => {
    socket.emit("rejectOrder", {
      token: localStorage.getItem("managerToken"),
      order: order,
    });
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
          {status === "processing" && (
            <>
              <ListItem>
                <FormControl sx={{ width: "100%", marginTop: 1 }}>
                  <InputLabel id="deliveryEmployees">
                    Select Delivery Employee
                  </InputLabel>
                  <Select
                    labelId="deliveryEmployees"
                    label="Select Delivery Employee"
                    onChange={handleDeliveryEmployeesChange}
                    fullWidth
                    variant="filled"
                    defaultValue={""}
                    required
                  >
                    {deliveryEmployees?.map((deliveryEmployee, i) => (
                      <MenuItem key={i} value={deliveryEmployee.username}>
                        {deliveryEmployee.username}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </ListItem>
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  onClick={handleAccept}
                  variant="contained"
                  sx={{
                    marginTop: 1,
                    backgroundColor: (theme) => theme.palette.colors.black,
                  }}
                >
                  Accept
                </Button>
                <Button
                  onClick={handleReject}
                  variant="contained"
                  color="error"
                  sx={{
                    marginTop: 1,
                  }}
                >
                  reject
                </Button>
              </ListItem>
            </>
          )}
        </List>
      </Grid>
    </Grid>
  );
};

export default ManagerOrder;
