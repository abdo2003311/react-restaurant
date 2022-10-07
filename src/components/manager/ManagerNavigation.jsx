import * as React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ManagerMenu from "./ManagerMenu";
import EngineeringIcon from "@mui/icons-material/Engineering";
import TaskIcon from "@mui/icons-material/Task";
import NavigationDrawer from "../common/NavigationDrawer";

export default function ManagerNavigation({ routes }) {
  return (
    <NavigationDrawer
      menu={<ManagerMenu />}
      routes={routes}
      links={[
        {
          text: "Completed Orders",
          link: "/manager/completedOrders",
          Icon: <InboxIcon />,
        },
        {
          text: "Uncompleted Orders",
          link: "/manager/unCompletedOrders",
          Icon: <TaskIcon />,
        },
        {
          text: "Employees",
          link: "/manager/employees",
          Icon: <EngineeringIcon />,
        },
      ]}
    />
  );
}
