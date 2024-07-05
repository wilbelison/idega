import ProductCard from "./ProductCard";

const Main = ({ catalog }) => {
  return (
    <main className="Main">
      {catalog.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </main>
  );
};

export default Main;
