import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetails from "../components/ProductDetails";
import { useDatabase } from "../context/DatabaseContext";

const Product = () => {
  const { productSlug } = useParams();

  const { categories, catalog } = useDatabase();

  const product = catalog.filter((product) => product.slug === productSlug)[0];
  const category = categories.filter(
    (category) => product.category === category.id
  )[0];

  return (
    <>
      <Breadcrumb category={category} />
      <ProductDetails product={product} />
    </>
  );
};

export default Product;
