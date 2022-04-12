import React from "react";

function EmbedExpression() {
  //Create function here
  const getBatch = (a, b) => {
      const jumlah = a + b

      return jumlah
    
  } 

  //Create a variable here
  const name = 'Samsul Rijal'

  return (
    // Code Inside div
    <div>
      <h2>{name}</h2>
      <p>{getBatch(10,20)}</p>
    </div>
  );
}



export default EmbedExpression;
