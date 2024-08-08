import Header from "../components/Header";
import Footer from "../components/Footer";
import CartView from "../components/CartView";

import { useAuth } from "../context/AuthContext";

const Admin = () => {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <main className="Admin">
        <h1 className="title">Gerenciar loja</h1>
      </main>
      <Footer />
      <CartView />
    </>
  );
};

export default Admin;
