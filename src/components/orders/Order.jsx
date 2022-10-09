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
let Order = (props) => {
  let { socket } = props;
  let [order, setOrder] = useState(props.order);
  let { status, location, notes, meals } = order;

  if (socket)
    socket.on("updateOrder", (data) => {
      setOrder(data);
    });

  return (
    <Grid
      item
      xs={12}
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
        </List>
      </Grid>
    </Grid>
  );
};

export default Order;
