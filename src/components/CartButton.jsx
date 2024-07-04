import iconCart from "../assets/images/icon-cart.svg";

const CartButton = ({ cartItems, updateCartItems }) => {
  function cartTest() {
    const items = [
      { id: 0, quantity: 1, stock: 1, price: 1.19 },
      { id: 1, quantity: 2, stock: 10, price: 2.99 },
      { id: 2, quantity: 3, stock: 100, price: 3.0 },
    ];
    updateCartItems(items);
  }

  let numberOfItems = 0;
  let totalCost = 0.0;

  cartItems.forEach((item) => {
    numberOfItems += item.quantity;
    console.log(numberOfItems);
    totalCost += item.quantity * item.price;
  });

  return (
    <button title="Exibir sacola" className="CartButton" onClick={cartTest}>
      <img src={iconCart} alt="Sacola" className="icon-cart" />
      <p className="cart-info">
        <span className="cart-cost">{totalCost.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
        <span className="cart-items">
          {numberOfItems === 1 ? "1 item" : numberOfItems + " itens"}
        </span>
      </p>
    </button>
  );
};

export default CartButton;
