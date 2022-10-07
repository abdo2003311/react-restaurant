import { useEffect, useState } from "react";

let useHeight = () => {
  let [height, setHeight] = useState(10);
  useEffect(() => {
    if (document.getElementsByClassName("MuiToolbar-root")[0]) {
      setHeight(
        window.innerHeight -
          document.getElementsByClassName("MuiToolbar-root")[0].clientHeight
      );
    }

    window.addEventListener("resize", () => {
      setHeight(
        window.innerHeight -
          document.getElementsByClassName("MuiToolbar-root")[0].clientHeight
      );
    });

    return window.removeEventListener("resize", () => {
      setHeight(
        window.innerHeight -
          document.getElementsByClassName("MuiToolbar-root")[0].clientHeight
      );
    });
  });

  return height;
};

export default useHeight;
