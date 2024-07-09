import { Link } from "react-router-dom";
import ProductCounter from "./ProductCounter";

const ProductCard = ({ product }) => {
  return (
    <div className="ProductCard">
      <Link to={`/product/${product.id}`} className="card-link">
        <img className="card-thumbnail" src={product.thumbnail} alt="" />
        <h3 className="card-title">{product.title}</h3>
        <p className="card-description">{product.description}</p>
        <p className="card-price">{product.price}</p>
      </Link>
      <ProductCounter productId={product.id} />
    </div>
  );
};

export default ProductCard;
