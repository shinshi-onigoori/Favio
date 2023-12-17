import React from "react";
import toast from "react-hot-toast";

const Toaster = () => {
  toast("", {
    // duration: 4000,
    position: "top-center",

    // Styling
    style: {
      width: 1 / 5,
      border: "1px solid #7b157b",
      padding: "16px",
      color: "#7b157b",
    },
    className: "",

    // Custom Icon
    // icon: "👏",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

  return null;
};

export default Toaster;
