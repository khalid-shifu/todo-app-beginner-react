import React from "react";
import Component2 from "./Component2";
import { UserContext } from "./UserContext";

const Component1 = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@fakemail.com",
    age: 30,
  };

  const isLoggedIn = false;
  return (
    <UserContext.Provider value={{ user, isLoggedIn }}>
      <p>Compotent1</p>
      <Component2 />
    </UserContext.Provider>
  );
};

export default Component1;
