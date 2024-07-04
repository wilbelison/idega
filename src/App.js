import "./assets/styles/default.css";

import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const menuItems = [
    { id: 0, title: "Todos os produtos", href: "/" },
    { id: 1, title: "Bebidas Alcóolicas", href: "?cat=1" },
    { id: 2, title: "Bebidas Não-alcóolicas", href: "?cat=2" },
  ];

  const [cartItems, setCartItems] = useState([]);

  function updateCartItems(items){
    setCartItems(items);
  };

  const fullCatalog = [
    { id: 0, stock: 10, name: "Zero", price: 9.99 },
    { id: 1, stock: 10, name: "Um", price: 9.99 },
  ];

  return (
    <>
      <Header menuItems={menuItems} cartItems={cartItems} updateCartItems={updateCartItems} />
      <Main fullCatalog={fullCatalog}/>
      <Footer />
    </>
  );
}

export default App;
