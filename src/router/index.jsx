import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

function Router() {
  const catalogItems = [
    {
      id: 0,
      stock: 99,
      category: 0,
      thumbnail: "https://placehold.co/200x200?text=thumbnail",
      image: "https://placehold.co/800x800?text=image",
      title: "Produto 0",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
      price: 0.99,
    },
    {
      id: 1,
      stock: 99,
      category: 1,
      thumbnail: "https://placehold.co/200x200?text=thumbnail",
      image: "https://placehold.co/800x800?text=image",
      title: "Produto 1",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
      price: 1.99,
    },
  ];

  return (
    <Routes>
      <Route exact path="/" element={<Home catalogItems={catalogItems} />} />
      <Route path="/category/:categoryId" element={<Category />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Router;
