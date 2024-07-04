import Logo from "./Logo";
import NavBar from "./NavBar";
import Search from "./Search";
import CartButton from "./CartButton";

const Header = ({ menuItems, cartItems, updateCartItems }) => {
  return (
    <header className="Header">
      <Logo />
      <NavBar menuItems={menuItems} />
      <Search />
      <CartButton cartItems={cartItems} updateCartItems={updateCartItems} />
    </header>
  );
};

export default Header;
