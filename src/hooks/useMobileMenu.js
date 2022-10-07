import { useEffect, useState } from "react";

let useMobileMenu = () => {
  let [mobileMenu, setMobileMenu] = useState(
    window.innerWidth <= 900 ? true : false
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (mobileMenu === false && window.innerWidth <= 900) setMobileMenu(true);
      if (mobileMenu === true && window.innerWidth >= 900) setMobileMenu(false);
    });

    return window.removeEventListener("resize", () => {
      if (mobileMenu === false && window.innerWidth <= 900) setMobileMenu(true);
      if (mobileMenu === true && window.innerWidth >= 900) setMobileMenu(false);
    });
  });
  return mobileMenu;
};

export default useMobileMenu;
