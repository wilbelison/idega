import ItemsSlider from "../components/ItemsSlider";
import ItemsGrid from "../components/ItemsGrid";

const Home = ({ catalog }) => {
  return (
    <main className="Home">
      <h1 className="title">Início</h1>
      <ItemsSlider title="Cervejas" items={catalog} />
      <ItemsGrid title="Mais Cervejas" items={catalog} />
    </main>
  );
};

export default Home;
