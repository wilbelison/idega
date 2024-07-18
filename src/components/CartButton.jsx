import { useDatabase } from "../context/DatabaseContext";

import iconCart from "../assets/images/icon-cart.svg";
import iconCartActive from "../assets/images/icon-cart-active.svg";

const CartButton = () => {
  const { catalog, cart } = useDatabase();

  let numberOfItems = cart.length;
  let totalCost = 0.0;

  cart.forEach((cartItem) => {
    numberOfItems += cartItem.count;
    const catalogItem = catalog.filter(
      (catalogItem) => cartItem.id === catalogItem.id
    )[0];
    totalCost += cartItem.count * catalogItem.price;
  });

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
