import Logo from "./Logo";
import NavBar from "./NavBar";
import Search from "./Search";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <header className="Header">
      <Logo />
      <NavBar />
      <Search />
      <CartButton />
    </header>
  );
};

export default Header;
