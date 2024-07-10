import ProductCard from "../components/ProductCard";

const ItemsGrid = ({ title, items }) => {
  return (
    <section className="ItemsGrid">
      <h2 className="subtitle">{title}</h2>
      <ul className="grid-items">
        {(items || []).map((item) => {
          return <ProductCard product={item} key={item.id} />;
        })}
      </ul>
    </section>
  );
};

export default ItemsGrid;
