import { useParams } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";

import Breadcrumb from "../components/Breadcrumb";
import ProductDetails from "../components/ProductDetails";

const Product = () => {
  const { productSlug } = useParams();
  const { catalog } = useDatabase();

  const product = catalog.filter((item) => item.slug === productSlug)[0];

  return (
    <>
      <Breadcrumb product={product} />
      <ProductDetails product={product} />
    </>
  );
};

export default Product;
