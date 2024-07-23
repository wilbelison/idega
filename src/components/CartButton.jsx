import { useEffect, useState } from "react";
import { useDatabase } from "../context/DatabaseContext";

import Loader from "../components/Loader";

import iconCart from "../assets/images/icon-cart.svg";
import iconCartActive from "../assets/images/icon-cart-active.svg";

const CartButton = () => {
  const { catalog, cart } = useDatabase();

  const [numberOfItems, setNumberOfItems] = useState(null);
  const [totalCost, setTotalCost] = useState(null);

  useEffect(() => {
    let items = 0;
    let total = 0.0;
    cart.forEach((item) => {
      items += item.count;
      const findProduct = catalog.find((product) => item.id === product.id);
      total += item.count * findProduct.price;
    });
    setNumberOfItems(items);
    setTotalCost(total);
  }, [catalog, cart, numberOfItems, totalCost]);

  if (!numberOfItems) {
    return <Loader />;
  }

  return (
    <button
      title="Abrir sacola de compras"
      className={`CartButton ${numberOfItems > 0 ? " active" : ""}`}
      onClick={() => {
        console.log("Abrir sacola de compras");
      }}
    >
      <img
        src={numberOfItems > 0 ? iconCartActive : iconCart}
        alt="Sacola"
        className="icon-cart"
      />
      <p className="cart-info">
        <span className="cart-cost">
          {totalCost.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <span className="cart-items">
          {numberOfItems === 1 ? "1 item" : numberOfItems + " itens"}
        </span>
      </p>
    </button>
  );
};

export default CartButton;
