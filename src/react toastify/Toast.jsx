import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Toast = () => {
  const hangleOnClick = () => {
    console.log("Toast clicked");
    toast("React toast example!");
  };

  return (
    <div>
      <h1>React Toastify</h1>
      <button onClick={hangleOnClick}>Click me</button>
      <ToastContainer />
    </div>
  );
};

export default Toast;
