import ProductRow from "./ProductRow";

const ItemsList = ({ title, items }) => {
  return (
    <section className="ItemsList">
      <h2 className="subtitle">{title}</h2>
      <ul className="items">
        {(items || []).map((item) => {
          return <ProductRow product={item} key={item.id} />;
        })}
      </ul>
    </section>
  );
};

export default ItemsList;
