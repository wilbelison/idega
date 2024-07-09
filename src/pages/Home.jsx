import ProductCard from "../components/ProductCard";

const Home = ({ catalog }) => {
  return (
    <main className="Home">
      <h1>Home</h1>
      {/* <div class="NavSlider">
        {items.map((categories) => {
          return <CategorieCard product={item} key={item.id} />;
        })}
      </div>
      <div class="ItemsSlider">
        {catalog.map((item) => {
          return <ProductCard product={item} key={item.id} />;
        })}
      </div> */}
      <div class="ItemsGrid">
        {(catalog || []).map((item) => {
          return <ProductCard product={item} key={item.id} />;
        })}
      </div>
    </main>
  );
};

export default Home;
