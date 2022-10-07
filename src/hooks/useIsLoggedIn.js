import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "../api";
import { verifyLogin } from "../store/features/auth/authSlice";

let useIsLoggedIn = ({ token, route }) => {
  let loggedIn = useSelector((state) => state.auth.isLoggedIn);
  let dispatch = useDispatch();
  let [loading, setLoading] = useState(true);

  let fetch = async () => {
    if (loading) {
      try {
        let data = await isLoggedIn({ token, route });
        if (data.status == 200) dispatch(verifyLogin({ isLoggedIn: true }));
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    }
  };
  fetch();

  return { loggedIn, loading };
};

export default useIsLoggedIn;
