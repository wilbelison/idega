import { useState } from "react";

import iconRemove from "../assets/images/icon-remove.svg";
import iconAdd from "../assets/images/icon-add.svg";

const ProductCounter = ({ productId, productCount }) => {
  const [counter, setCounter] = useState(productCount);
  
  return (
    <div className="ProductCounter active">
      <button
        className="button-remove"
        onClick={(e) => {
          e.preventDefault();
          if (counter > 0) setCounter(counter - 1);
        }}
      >
        <img src={iconRemove} alt="Remover" />
      </button>
      <span className="counter">{counter}</span>
      <button
        className="button-add"
        onClick={(e) => {
          e.preventDefault();
          setCounter(counter + 1);
        }}
      >
        <img src={iconAdd} alt="Adicionar" />
      </button>
    </div>
  );
};

export default ProductCounter;
