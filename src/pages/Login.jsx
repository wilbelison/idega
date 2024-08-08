import { Navigate, useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CartView from "../components/CartView";

import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { signInGoogle, signed } = useAuth();

  if (signed) return <Navigate to="/admin" />;

  async function loginGoogle() {
    await signInGoogle();
  }

  return (
    <>
      <Header />
      <main className="Login">
        <h1 className="title">Entrar</h1>
        <button className="login-button google" onClick={loginGoogle}>
          Utilizando uma conta Google
        </button>
      </main>
      <Footer />
      <CartView />
    </>
  );
};

export default Login;
