import { Link } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";

import Loader from "./Loader";
import ItemsList from "./ItemsList";

import iconClose from "../assets/images/icon-close.svg";

const CartView = () => {
  const { cart, cartView, toggleCartView } = useDatabase();

  return (
    <aside
      className={`CartView ${cartView && "open"} ${
        cart.items.length <= 0 ? "empty" : ""
      }`}
    >
      <button className="close" onClick={toggleCartView}>
        <img src={iconClose} className="icon-close" alt="Fechar sacola" />
      </button>
      <ItemsList
        title={`Sacola de compras ${cart.items.length > 0 ? "" : "vazia :("}`}
        type="products"
        items={cart.items}
      />
      <div className="checkout-info">
        <span className="divider"></span>
        <span className="total">
          <span className="title">Total:</span>
          <span className="value">
            {cart.total.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </span>
        <Link
          className="checkout-button"
          to="/sacola"
          title="Finalizar compra"
          onClick={toggleCartView}
        >
          Finalizar compra
        </Link>
      </div>
    </aside>
  );
};

export default CartView;
