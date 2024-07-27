import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";

import Loader from "./Loader";
import ItemsList from "./ItemsList";

import iconClose from "../assets/images/icon-close.svg";

const CartView = () => {
  const { catalog, cart, cartView, toggleCartView } = useDatabase();

  const [numberOfItems, setNumberOfItems] = useState(null);
  const [totalCost, setTotalCost] = useState(null);

  useEffect(() => {
    let items = 0;
    let total = 0.0;

    setNumberOfItems(items);
    setTotalCost(total);

    if (numberOfItems != null && numberOfItems > 0) {
      cart.forEach((item) => {
        items += item.count;
        const findProduct = catalog.find((product) => item.id === product.id);
        total += item.count * findProduct.price;
      });
    }
  }, [catalog, cart, numberOfItems]);

  if (numberOfItems === null) {
    return <Loader />;
  }

  return (
    <aside className={`CartView ${cartView && "open"}`}>
      <button className="close" onClick={toggleCartView}>
        <img src={iconClose} className="icon-close" alt="Fechar sacola" />
      </button>
      <ItemsList title="Sacola de compras" type="products" items={catalog} />
      <div className="checkout-info">
        <span className="divider"></span>
        <span className="total">
          <span className="title">Total:</span>
          <span className="value">R$ 0,00</span>
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
