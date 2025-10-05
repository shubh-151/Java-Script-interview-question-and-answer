import React, { useState } from "react";

const StateHook = () => {
  const [countOne, setCountOne] = useState(0);
  const Increment = () => {
    setCountOne(countOne + 1);
  };
  const Decrement = () => {
    setCountOne(countOne - 1);
  };
  return (
    <div>
      <h1>useState hook</h1>
      <button onClick={Increment}> Increment</button>
      <span>{countOne}</span>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default StateHook;
