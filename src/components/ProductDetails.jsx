import Markdown from "react-markdown";
import ProductCounter from "./ProductCounter";

const ProductDetails = ({ product }) => {
  return (
    <main className="ProductDetails">
      <div className="product-thumbnail">
        <img src={product.image} alt="" />
        <div className="thumbnail-overlay"></div>
      </div>
      <div className="product-infos">
        <h1 className="product-title">{product.title}</h1>
        <span className="product-details">{product.details}</span>
        <span className="product-description">
          <Markdown>{product.description}</Markdown>
        </span>
        <span className="product-price">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <ProductCounter productId={product.id} />
      </div>
    </main>
  );
};

export default ProductDetails;
