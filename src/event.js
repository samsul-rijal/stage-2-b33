import React from "react";

function Event() {
  //Create function here

  function Hello() {
    return alert("Good Morning")
  }

  const name = 'Anggi'

  return (
    // Code Inside div
    <div>
      <button onClick={Hello}>Klik Here</button>
      <button onClick={() => alert("Hallo Batch 33")}>Klik Me</button>
      <button onClick={() => alert(name)}>Klik</button>
    </div>
  );
}

export default Event;
