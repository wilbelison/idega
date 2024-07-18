import { Link } from "react-router-dom";
import ProductCounter from "./ProductCounter";

const ProductCard = ({ product, active }) => {
  return (
    <li className={`ProductCard ${active}`}>
      <Link to={`/product/${product.slug}`} className="card-link">
        <div
          className="card-thumbnail"
          style={{ backgroundImage: `url(${product.thumbnail})` }}
        >
          <div className="thumbnail-overlay"></div>
          <ProductCounter productId={product.id} />
        </div>
        <span className="card-title">{product.title}</span>
        <span className="card-details">{product.details}</span>
        <span className="card-price">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </Link>
    </li>
  );
};

export default ProductCard;
