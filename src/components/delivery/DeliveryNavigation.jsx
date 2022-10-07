import * as React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DeliveryMenu from "./DeliveryMenu";
import TaskIcon from "@mui/icons-material/Task";
import NavigationDrawer from "../common/NavigationDrawer";

export default function DeliveryNavigation({ routes }) {
  return (
    <NavigationDrawer
      menu={<DeliveryMenu />}
      routes={routes}
      links={[
        {
          text: "Completed Orders",
          link: "/delivery/completedOrders",
          Icon: <InboxIcon />,
        },
        {
          text: "Uncompleted Orders",
          link: "/delivery/unCompletedOrders",
          Icon: <TaskIcon />,
        }
      ]}
    />
  );
}
