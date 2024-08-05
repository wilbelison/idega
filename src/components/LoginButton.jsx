import { useState } from "react";
import { NavLink } from "react-router-dom";
import iconLogin from "../assets/images/icon-login.svg";
import iconLogout from "../assets/images/icon-logout.svg";

const LoginButton = () => {
  const [adminLogged, setAdminLogged] = useState(false);

  const handleLogin = () => {
    setAdminLogged(!adminLogged);
  };

  if (adminLogged) {
    return (
      <>
        <NavLink to="/admin" className="admin-link" activeclassname="active">
          Admin
        </NavLink>
        <button title="Entrar" className="login-button" onClick={handleLogin}>
          <img src={iconLogout} alt="Sair" className="icon-logout" />
        </button>
      </>
    );
  } else {
    return (
      <button title="Entrar" className="login-button" onClick={handleLogin}>
        <img src={iconLogin} alt="Sair" className="icon-login" />
      </button>
    );
  }
};

export default LoginButton;
