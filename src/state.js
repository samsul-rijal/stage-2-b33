import React, {useState} from "react";

function State() {
  //init State
  const [counter, setCounter] = useState(0)

  //Create Function Add
  function Add() {
    return setCounter(counter + 1)
  }

  //Create Function Less
  function Less() {
    if (counter > 1) {
      return setCounter(counter - 1)
    }
  }

  return (
    // Code Inside div
    <div>
      <h2>{counter}</h2>

      <button onClick={Add}>Add</button>
      <button onClick={Less}>Less</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

export default State;
