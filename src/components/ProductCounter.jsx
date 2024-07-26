import { useState, useEffect } from "react";
import { useDatabase } from "../context/DatabaseContext";

import iconRemove from "../assets/images/icon-remove.svg";
import iconTrash from "../assets/images/icon-trash.svg";
import iconAdd from "../assets/images/icon-add.svg";

const ProductCounter = ({ productId }) => {
  const { catalog, cart, setCartItemCount } = useDatabase();

  const [counter, setCounter] = useState(0);
  const [stock, setStock] = useState(0);

  useEffect(() => {
    const catalogItem = catalog.find((item) => item.id === productId);
    const cartItem = cart.find((item) => item.id === productId);

    if (cartItem) {
      setCounter(cartItem.count);
    } else {
      setCounter(0); // Reseta o contador para zero se o item não estiver no carrinho
    }

    if (catalogItem) {
      setStock(catalogItem.stock);
    }
  }, [catalog, cart, productId]);

  const handleRemove = (e) => {
    e.preventDefault();
    if (counter > 0) {
      const newCount = counter - 1;
      setCounter(newCount);
      setCartItemCount(productId, newCount);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (stock > counter) {
      const newCount = counter + 1;
      setCounter(newCount);
      setCartItemCount(productId, newCount);
    }
  };

  return (
    <div className={`ProductCounter ${counter > 0 ? " active" : ""}`}>
      <button
        className="remove"
        onClick={handleRemove}
        disabled={counter === 0}
      >
        <img
          className="icon-remove"
          src={counter === 1 ? iconTrash : iconRemove}
          alt="Remover"
        />
      </button>
      <span className="counter">{counter}</span>
      <button className="add" onClick={handleAdd} disabled={counter >= stock}>
        <img className="add icon" src={iconAdd} alt="Adicionar" />
        <span className="add label">Adicionar</span>
      </button>
    </div>
  );
};

export default ProductCounter;