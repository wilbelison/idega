import { useState, useEffect } from "react";
import { useDatabase } from "../context/DatabaseContext";

import Loader from "../components/Loader";

import iconRemove from "../assets/images/icon-remove.svg";
import iconTrash from "../assets/images/icon-trash.svg";
import iconAdd from "../assets/images/icon-add.svg";

const ProductCounter = ({ product }) => {
  const { cart, updateCart } = useDatabase();
  const initialCounter = cart.items.find(item => item.id === product.id)?.count || 0;
  const [counter, setCounter] = useState(initialCounter);
  const [stock, setStock] = useState(product.stock);

  useEffect(() => {
    const item = cart.items.find(item => item.id === product.id);
    if (item) {
      setCounter(item.count);
    }
  }, [cart, product]);

  if (!cart) {
    return <Loader />;
  }

  const handleRemove = (e) => {
    e.preventDefault();
    console.log("remove");
    if (counter > 0) {
      const newCount = counter - 1;
      setCounter(newCount);
      updateCart(product, newCount);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log("add");
    if (stock > counter) {
      const newCount = counter + 1;
      setCounter(newCount);
      updateCart(product, newCount);
    }
  };

  return (
    <div className={`ProductCounter ${counter > 0 ? "active" : ""}`}>
      <button
        className="remove"
        onClick={handleRemove}
        disabled={counter === 0}
        aria-label="Remover item"
      >
        <img
          className="icon-remove"
          src={counter === 1 ? iconTrash : iconRemove}
          alt={counter === 1 ? "Remover item" : "Diminuir quantidade"}
        />
      </button>
      <span className="counter">{counter}</span>
      <button
        className="add"
        onClick={handleAdd}
        disabled={counter >= stock}
        aria-label="Adicionar item"
      >
        <img className="add icon" src={iconAdd} alt="Adicionar item" />
        <span className="add label">Adicionar</span>
      </button>
    </div>
  );
};

export default ProductCounter;
