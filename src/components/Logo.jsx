import { Link } from "react-router-dom";

import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <Link to="/" className="Logo" title="Ir para o Início">
      <img src={logo} alt="iDega" />
    </Link>
  );
};

export default Logo;
