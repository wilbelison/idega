import { useParams } from "react-router-dom";

const Product = () => {
  const { productSlug } = useParams();

  return (
    <main className="ProductDetails">
      <h1>Product</h1>
      <h2>{productSlug}</h2>
    </main>
  );
};

export default Product;