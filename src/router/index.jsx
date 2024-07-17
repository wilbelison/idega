import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Search from "../pages/Search";
import Cart from "../pages/Cart";

function Router() {

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home />}
      />
      <Route
        path="/category/:categorySlug"
        element={<Category />}
      />
      <Route path="/product/:productSlug" element={<Product />} />
      <Route path="/search" element={<Search />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Router;
