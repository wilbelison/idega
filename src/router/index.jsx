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
        path="/categoria/:categorySlug"
        element={<Category />}
      />
      <Route path="/produto/:productSlug" element={<Product />} />
      <Route path="/busca" element={<Search />} />
      <Route path="/sacola" element={<Cart />} />
    </Routes>
  );
}

export default Router;
