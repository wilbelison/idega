import Header from "../components/Header";
import Footer from "../components/Footer";
import CartView from "../components/CartView";

const Admin = () => {
  return (
    <>
      <Header />
      <main className="Admin">
        <h1 className="title">Admin</h1>
      </main>
      <Footer />
      <CartView />
    </>
  );
};

export default Admin;
