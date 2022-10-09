import { useState } from "react";
import { getAdminUsers } from "../../api";

let useAdminUsers = () => {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);
  let fetchData = async () => {
    if (loading) {
      let data = await getAdminUsers();
      setUsers(data);
      setLoading(false);
    }
  };
  fetchData();

  return { loading, users };
};

export default useAdminUsers;
