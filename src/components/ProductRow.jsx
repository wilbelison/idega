import { Link } from "react-router-dom";
import ProductCounter from "./ProductCounter";

const ProductRow = ({ product }) => {
  return (
    <li className="ProductRow">
      <Link to={`/produto/${product.slug}`} className="title">
        {product.title}
      </Link>
      <ProductCounter productId={product.id} />
      <span className="price">
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
    </li>
  );
};

export default ProductRow;
