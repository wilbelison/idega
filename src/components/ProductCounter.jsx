import { useState } from "react";

import iconRemove from "../assets/images/icon-remove.svg";
import iconAdd from "../assets/images/icon-add.svg";

const ProductCounter = ({ productId }) => {
  const cart = [
    {
      id: 0,
      count: 1,
    },
    {
      id: 1,
      count: 2,
    },
  ];

  let counter = 0;

  cart.map((item) => {
    console.log(item);
    if (item.id === parseInt(productId)) {
      counter = item.count;
    }
  });

  return (
    <div className="ProductCounter active">
      <button
        className="button-remove"
        onClick={(e) => {
          e.preventDefault();
          if (counter > 0) counter--;
          console.log(counter);
        }}
      >
        <img src={iconRemove} alt="Remover" />
      </button>
      <span className="counter">{counter}</span>
      <button
        className="button-add"
        onClick={(e) => {
          e.preventDefault();
          counter++;
          console.log(counter);
        }}
      >
        <img src={iconAdd} alt="Adicionar" />
      </button>
    </div>
  );
};

export default ProductCounter;
