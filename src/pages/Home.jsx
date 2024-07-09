import ProductCard from "../components/ProductCard";

const Home = ({ catalog }) => {
  return (
    <main className="Home">
      <h1 className="title">Home</h1>
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
      <section className="Grid">
        <h2 className="subtitle">Products Grid</h2>
        <ul className="ItemsGrid">
          {(catalog || []).map((item) => {
            return <ProductCard product={item} key={item.id} />;
          })}
        </ul>
      </section>
    </main>
  );
};

export default Home;
