import Logo from "./Logo";
import NavBar from "./NavBar";
import Search from "./Search";
import LoginButton from "./LoginButton";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <header className="Header">
      <Logo />
      <NavBar />
      <Search />
      <div className="header-buttons">
        <LoginButton />
        <CartButton />
      </div>
    </header>
  );
};

export default Header;
