import React from "react";
import "../App.css";
import { useState, useEffect } from "react";

const DynamicStyling = () => {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (name.length < 2) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [name]);

  const hangleChnge = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={hangleChnge}
        className={`${isValid ? "valid" : "invalid"}`}
      />
    </div>
  );
};

export default DynamicStyling;
