import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CartView from "../components/CartView";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  return (
    <>
      <Header />
      <main className="Search">
        <h1 className="title">
          Busca por <span className="query">"{query}"</span>
        </h1>
      </main>
      <Footer />
      <CartView />
    </>
  );
};

export default Search;
