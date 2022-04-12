import React from "react";
import List from "./components/list";

//Import Components

const data = [
  {
    name: 'Product 1',
    price: 20000
  },
  {
    name: 'Product 2',
    price: 20000
  },
  {
    name: 'Product 3',
    price: 20000
  },
]

function Props() {

  return (
    // Code Inside div
    <div>
      {data.map((item) => {
        return(
          <div>
            <List name={item.name} price={item.price} />
          </div>
        )
      })}
    </div>
  );
}

export default Props;
