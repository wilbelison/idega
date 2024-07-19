import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";

import Breadcrumb from "../components/Breadcrumb";
import ProductDetails from "../components/ProductDetails";
import Loader from "../components/Loader";

const Product = () => {
  const { productSlug } = useParams();
  const { catalog } = useDatabase();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const findProduct = catalog.find((item) => item.slug === productSlug);
    if (findProduct) {
      setProduct(findProduct);
    }
  }, [catalog, productSlug]);

  if (!product) {
    return <Loader />;
  }

  return (
    <>
      <Breadcrumb product={product} />
      <ProductDetails product={product} />
    </>
  );
};

export default Product;
