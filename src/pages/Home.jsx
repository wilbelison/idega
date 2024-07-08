import ProductCard from "../components/ProductCard";

const Home = ({ catalogItems }) => {
  return (
    <main className="Home">
      <h1>Home</h1>
      {catalogItems.map((item) => {
        return <ProductCard product={item} key={item.id} />;
      })}
    </main>
  );
};

export default Home;
