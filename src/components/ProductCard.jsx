import { Link } from "react-router-dom";
import ProductCounter from "./ProductCounter";

const ProductCard = ({ product }) => {
  return (
    <div className={`ProductCard producId-${product.id}`}>
      <Link to={`/product/${product.id}`} className="card-link">
        <h3 className="card-title">{product.title}</h3>
        <img className="card-thumbnail" src={product.thumbnail} alt="" />
        <p className="card-description">{product.description}</p>
        <p className="card-price">{product.price}</p>
      </Link>
      <ProductCounter productId={product.id} />
    </div>
  );
};

export default ProductCard;
