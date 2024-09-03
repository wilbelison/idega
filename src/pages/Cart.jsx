import { Link } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";

import CartHeader from "../components/CartHeader";
import ItemsList from "../components/ItemsList";

const Cart = () => {
  const { cart } = useDatabase();

  return (
    <>
      <CartHeader />
      <main className={`${cart.items.length <= 0 ? "Cart empty" : "Cart"}`}>
        <h1 className="title">Finalizar compra</h1>
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
            title="Efetuar pagamento"
            onClick={console.log("Efetuar pagamento")}
          >
            Efetuar pagamento
          </Link>
        </div>
      </main>
    </>
  );
};

export default Cart;
