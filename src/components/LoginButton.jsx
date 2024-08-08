import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import iconLogin from "../assets/images/icon-login.svg";
import iconLogout from "../assets/images/icon-logout.svg";

const LoginButton = () => {
  const { signed, user, logout } = useAuth();

  if (signed) {
    return (
      <>
        { user.email === "meustudio@gmail.com" ? <NavLink to="/admin" className="link" activeclassname="active">Gerenciar loja</NavLink> : <NavLink to="/orders" className="link" activeclassname="active">Meus pedidos</NavLink> }
        <button title="Sair" className="LoginButton" onClick={logout}>
          <img src={iconLogout} alt="Sair" className="icon" />
        </button>
      </>
    );
  } else {
    return (
      <Link to="/login" title="Entrar" className="LoginButton">
        <img src={iconLogin} alt="Entrar" className="icon" />
      </Link>
    );
  }
};

export default LoginButton;
