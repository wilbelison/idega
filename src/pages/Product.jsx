import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CartView from "../components/CartView";
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
      <Header />
      <Breadcrumb product={product} />
      <ProductDetails product={product} />
      <Footer />
      <CartView />
    </>
  );
};

export default Product;
