import React from "react";
import Swal from "sweetalert2";

const SuccessSweetAlart = (
  title,
  icon = "success",
  position = "top-end",
  timer = 1500
) => {
  Swal.fire({
    position,
    icon,
    title: title || "Your work has been saved",
    showConfirmButton: false,
    timer,
  });
};

export default SuccessSweetAlart;
