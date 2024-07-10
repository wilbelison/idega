import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();

  return (
    <>
    <aside className="ProductFilters">
      <h3>Filtros</h3>
    </aside>
    <main className="ProductDetails">
      <h1>Product</h1>
      <h2>{productId}</h2>
    </main>
    </>
  );
};

export default Product;