import ItemsSlider from "../components/ItemsSlider";
import ItemsGrid from "../components/ItemsGrid";

const Home = ({ catalog }) => {
  return (
    <main className="Home">
      <h1 className="title">Início</h1>
      <ItemsSlider title="Cervejas" type="products" items={catalog} />
      <ItemsGrid title="Mais Cervejas" type="products" items={catalog} />
    </main>
  );
};

export default Home;
