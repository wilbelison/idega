import ItemsSlider from "../components/ItemsSlider";
import ItemsGrid from "../components/ItemsGrid";

const Home = ({ catalog }) => {
  return (
    <main className="Home">
      <h1 className="title">Início</h1>
      <ItemsSlider title="Items Slider" items={catalog} />
      <ItemsGrid title="Items Grid" items={catalog} />
    </main>
  );
};

export default Home;
