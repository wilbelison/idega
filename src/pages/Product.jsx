import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();

  return (
    <main className="Product">
      <h1>Product</h1>
      <h2>{productId}</h2>
    </main>
  );
};

export default Product;