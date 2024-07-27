import Header from "../components/Header";
import Footer from "../components/Footer";
import CartView from "../components/CartView";
import ItemsSlider from "../components/ItemsSlider";
import ItemsGrid from "../components/ItemsGrid";

import { useDatabase } from "../context/DatabaseContext";

const Home = () => {
  const { catalog } = useDatabase();

  return (
    <>
      <Header />
      <main className="Home">
        <h1 className="title">Início</h1>
        <ItemsSlider title="Cervejas" type="products" items={catalog} />
        <ItemsGrid title="Mais Cervejas" type="products" items={catalog} />
      </main>
      <Footer />
      <CartView />
    </>
  );
};

export default Home;
