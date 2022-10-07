import { useEffect, useState } from "react";

let useSLidesToShow = () => {
  let [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth <= 900 ? 1 : 3
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (slidesToShow === 3 && window.innerWidth <= 900) setSlidesToShow(1);
      if (slidesToShow === 1 && window.innerWidth >= 900) setSlidesToShow(3);
    });

    return window.removeEventListener("resize", () => {
      if (slidesToShow === 3 && window.innerWidth <= 900) setSlidesToShow(1);
      if (slidesToShow === 1 && window.innerWidth >= 900) setSlidesToShow(3);
    });
  });
  return slidesToShow;
};

export default useSLidesToShow;
