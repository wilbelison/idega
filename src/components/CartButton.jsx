import iconCart from "../assets/images/icon-cart.svg";

const CartButton = () => {

  const cartItems = [
    {
      "id": 0,
      "count": 1
    },
    {
      "id": 1,
      "count": 2
    }
  ]
  
  let numberOfItems = 0;
  let totalCost = 0.0;

  cartItems.forEach((item) => {
    numberOfItems += item.count;
    totalCost += item.count * item.price;
  });

  return (
    <button
      title="Ir para a sacola"
      className="CartButton"
      onClick={() => {
        console.log("sacola");
      }}
    >
      <img src={iconCart} alt="Sacola" className="icon-cart" />
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
