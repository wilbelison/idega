import { Link } from "react-router-dom";

import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <Link to="/" className="Logo" title="Home">
      <img src={logo} alt="iDega" />
    </Link>
  );
};

export default Logo;
