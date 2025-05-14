import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Component3 = () => {
  const { user, isLoggedIn } = useContext(UserContext);
  return (
    <div>
      <p> Component3</p>
      <h3>name : {user.name}</h3>
      <h3>email : {user.email}</h3>
      <h3>age : {user.age}</h3>
      <h3>isLoggedIn : {isLoggedIn ? "true" : "false"}</h3>
    </div>
  );
};

export default Component3;
