import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

function Router() {
  const categories = [
    {
      id: 0,
      title: "Cervejas",
      slug: "cervejas",
    },
    {
      id: 1,
      title: "Vinhos",
      slug: "vinhos",
    },
    {
      id: 2,
      title: "Destilados",
      slug: "destilados",
    },
    {
      id: 3,
      title: "Não Alcóolicos",
      slug: "nao-alcoolicos",
    },
    {
      id: 4,
      title: "Tabacaria",
      slug: "tabacaria",
    },
    {
      id: 5,
      title: "Snacks e outros",
      slug: "snacks-e-outros",
    },
  ];

  const catalog = [
    {
      id: 0,
      stock: 99,
      category: 0,
      thumbnail: "https://placehold.co/200x200?text=thumbnail",
      image: "https://placehold.co/800x800?text=image",
      title: "Produto 0",
      slug: "produto-0",
      details: "Mussum Ipsum",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
      price: 0.99,
    },
    {
      id: 1,
      stock: 99,
      category: 1,
      thumbnail: "https://static.ifood-static.com.br/image/upload/t_high/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202310021649_qf74tsrau8i.jpg",
      image: "https://placehold.co/800x800?text=image",
      title: "Longneck Heineken, a Verdinha",
      slug: "longneck-heineken-a-verdinha",
      details: "Unidade 330ml",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
      price: 1.99,
    },
    {
      id: 2,
      stock: 99,
      category: 2,
      thumbnail: "https://placehold.co/200x200?text=thumbnail",
      image: "https://placehold.co/800x800?text=image",
      title: "Produto 2",
      slug: "produto-2",
      details: "Mussum Ipsum",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
      price: 2.99,
    },
    {
      id: 3,
      stock: 99,
      category: 3,
      thumbnail: "https://placehold.co/200x200?text=thumbnail",
      image: "https://placehold.co/800x800?text=image",
      title: "Produto 3",
      slug: "produto-3",
      details: "Mussum Ipsum",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
      price: 3.99,
    },
    {
      id: 4,
      stock: 99,
      category: 4,
      thumbnail: "https://placehold.co/200x200?text=thumbnail",
      image: "https://placehold.co/800x800?text=image",
      title: "Produto 4",
      slug: "produto-4",
      details: "Mussum Ipsum",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
      price: 4.99,
    },
    {
      id: 5,
      stock: 99,
      category: 5,
      thumbnail: "https://placehold.co/200x200?text=thumbnail",
      image: "https://placehold.co/800x800?text=image",
      title: "Produto 5",
      slug: "produto-5",
      details: "Mussum Ipsum",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
      price: 5.99,
    },
  ];

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home categories={categories} catalog={catalog} />}
      />
      <Route path="/category/:categoryId" element={<Category />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Router;
