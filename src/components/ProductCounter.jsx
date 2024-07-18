import { useState, useEffect } from "react";
import { useDatabase } from "../context/DatabaseContext";

import iconRemove from "../assets/images/icon-remove.svg";
import iconTrash from "../assets/images/icon-trash.svg";
import iconAdd from "../assets/images/icon-add.svg";

const ProductCounter = ({ productId }) => {
  const { catalog, cart } = useDatabase();

  const [counter, setCounter] = useState();
  const [stock, setStock] = useState();

  useEffect(() => {
    const catalogItem = catalog.filter((item) => item.id === productId);
    if (catalogItem[0]) {
      setStock(catalogItem[0].stock);
      const cartItem = cart.filter((item) => item.id === productId);
      if (cartItem[0]) {
        setCounter(cartItem[0].count);
      }
    }
  }, []);

  return (
    <div className={`ProductCounter ${counter > 0 ? " active" : ""}`}>
      <button
        className="button-remove"
        onClick={(e) => {
          e.preventDefault();
          if (counter > 0) setCounter(counter - 1);
        }}
      >
        <img
          className="icon-remove"
          src={counter === 1 ? iconTrash : iconRemove}
          alt="Remover"
        />
      </button>
      <span className="counter">{counter}</span>
      <button
        className="button-add"
        onClick={(e) => {
          e.preventDefault();
          if (counter) {
            if (stock > counter) {
              setCounter(counter + 1);
            }
          } else {
            setCounter(1);
          }
        }}
      >
        <img className="button-add icon" src={iconAdd} alt="Adicionar" />
        <span className="button-add label">Adicionar</span>
      </button>
    </div>
  );
};

export default ProductCounter;
