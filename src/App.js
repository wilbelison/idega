import "./assets/styles/default.css";

import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  
  const NavItems = [
    { id: 0, title: "Todos os produtos", href: "/" },
    { id: 1, title: "Bebidas Alcóolicas", href: "?category=1" },
    { id: 2, title: "Bebidas Não-alcóolicas", href: "?category=2" },
  ];

  const [Catalog, setCatalog] = useState([]);
  const [Cart, setCart] = useState([]);

  cartItems.forEach((item) => {
    numberOfItems += item.count;
    console.log(numberOfItems);
    totalCost += item.count * item.price;
  });

  setCatalog([
    { id: 0, stock: 1, category: null, title: "ID Zero", price: 1.99, cart: 0 },
    { id: 1, stock: 10, category: 1, title: "ID Um", price: 2.99, cart: 1 },
    { id: 2, stock: 100, category: 2, title: "ID Dois", price: 3.99, cart: 2 },
  ]);

  const itemsTest = [
    { id: 0, count: 1 },
    { id: 1, count: 2 },
    { id: 2, count: 3 },
  ];

  updateCart(itemsTest);

  function updateCart(item, count) {

    let numberOfItems = 0;
    let totalCost = 0.0;

    const items = catalog.map((item) => {
      if (item.cart > 0) return item;
    });
    setCartItems(items);

  }

  return (
    <>
      <Header NavItems={NavItems} Cart={Cart} updateCart={updateCart} />
      <Main Catalog={Catalog} Cart={Cart} updateCart={updateCart} />
      <Footer />
    </>
  );
}

export default App;
