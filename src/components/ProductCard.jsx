import { Link } from "react-router-dom";
import ProductCounter from "./ProductCounter";

const cart = [
  {
    id: 0,
    count: 1,
  },
  {
    id: 1,
    count: 2,
  },
];


const ProductCard = ({ product }) => {

  let productCount = 0;

  cart.forEach((item) => {
    if(item.id === parseInt(product.id)) {
      productCount = item.count;
    }
  });
  return (
    <li className="ProductCard">
      <Link to={`/product/${product.slug}`} className="card-link">
        <div className="card-thumbnail" style={{backgroundImage: `url(${product.thumbnail})`}}>
          <div className="thumbnail-overlay"></div>
          <ProductCounter productId={product.id} productCount={productCount} />
        </div>
        <span className="card-title">{product.title}</span>
        <span className="card-details">{product.details}</span>
        <span className="card-price">{product.price}</span>
      </Link>
    </li>
  );
};

export default ProductCard;
