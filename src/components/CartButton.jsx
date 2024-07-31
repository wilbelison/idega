import { useEffect, useState } from "react";
import { useDatabase } from "../context/DatabaseContext";

import Loader from "../components/Loader";

import iconCart from "../assets/images/icon-cart.svg";
import iconCartActive from "../assets/images/icon-cart-active.svg";

const CartButton = () => {
  const { cart, toggleCartView } = useDatabase([]);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0.0);

  useEffect(() => {
    setCount(cart.total.count);
    setPrice(cart.total.price);
  }, [cart]);

  if (cart === null) {
    return <Loader />;
  }

  return (
    <button
      title="Abrir sacola de compras"
      className={`CartButton ${count > 0 ? " active" : ""}`}
      onClick={toggleCartView}
    >
      <img
        src={count > 0 ? iconCartActive : iconCart}
        alt="Sacola de compras"
        className="icon-cart"
      />
      <p className="cart-info">
        <span className="cart-cost">
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <span className="cart-items">
          {count === 1 ? "1 item" : count + " itens"}
        </span>
      </p>
    </button>
  );
};

export default CartButton;
