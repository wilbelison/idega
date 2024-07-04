import iconCart from "../assets/images/icon-cart.svg";

const CartButton = () => {
  return (
    <button title="Exibir sacola" className="CartButton">
      <img src={iconCart} alt="Sacola" className="icon-cart" />
      <p className="cart-info">
        <span className="cart-cost">R$ 0,00</span>
        <span className="cart-items">0 itens</span>
      </p>
    </button>
  );
};

export default CartButton;
