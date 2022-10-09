import * as React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PeopleAlt from "@mui/icons-material/PeopleAlt";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import AdminMenu from "./AdminMenu";
import NavigationDrawer from "../common/NavigationDrawer";

export default function adminNavigation({ routes }) {
  return (
    <NavigationDrawer
      menu={<AdminMenu />}
      routes={routes}
      links={[
        {
          text: "Orders",
          link: "/admin/orders",
          Icon: <InboxIcon />,
        },
        {
          text: "Employees",
          link: "/admin/employees",
          Icon: <EngineeringIcon />,
        },
        {
          text: "Users",
          link: "/admin/users",
          Icon: <PeopleAlt />,
        },
        {
          text: "Meals",
          link: "/admin/meals",
          Icon: <LocalDiningIcon />,
        },
      ]}
    />
  );
}
