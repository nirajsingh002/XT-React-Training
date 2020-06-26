import React from "react";
import { useInputChange } from "./reusable/useInputChange";

export const ControlledComponentWithHooks = () => {
  const [input, handleInputChange] = useInputChange();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("input", input);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" onChange={handleInputChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="text" name="password" onChange={handleInputChange} />
      </div>
      <input type="submit" />
    </form>
  );
};
