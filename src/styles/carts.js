let cartsStyles = (props) => {
  return {
    overflow: "hidden",
    direction: (props) => `${props.palette.ltr ? "ltr" : "rtl"}`,
    "& .cart": {
      padding: "1vw",
      "& svg": {
        width: "25px",
        height: "25px",
        margin: ".1vw",
      },
      "& .cartMeal:first-of-type": {
        marginTop: 0,
      },
      "& .cartMeal": {
        boxShadow: (theme) => theme.palette.boxShadow,
        margin: "1vw",
        padding: "1vw",
        "& img": {
          width: "100%",
        },
      },
      "& .paycard": {
        boxShadow: (theme) => theme.palette.boxShadow,
        padding: "2vw",
        color: "#fff !important",
        "& input, ::placeholder, label": {
          color: "#fff !important",
        },
        "& fieldset": {
          border: ".1px solid #fff !important",
        },
        background: (props) => props.palette.colors.black,
        "& .checkoutButton": {
          width: "100% !important",
          display: "flex",
          justifyContent: "space-between",
          "& .check": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          },
        },
        "& .MuiOutlinedInput-root": {
          marginBottom: "1vw",
        },
      },
    },
  };
};

export default cartsStyles;
