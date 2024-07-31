import { useState } from "react";
import Markdown from "react-markdown";
import ProductCounter from "./ProductCounter";

const ProductDetails = ({ product }) => {
  const [zoom, setZoom] = useState(false);

  return (
    <main className="ProductDetails">
      <div className={`product-image ${zoom ? "zoom" : ""}`} onClick={() => setZoom(!zoom)}>
        <img src={product.image} alt="" />
        <div className="image-overlay"></div>
      </div>
      <div className="product-infos">
        <h1 className="product-title">{product.title}</h1>
        <span className="product-details">{product.details}</span>
        <span
          className="product-description collapsed"
          onClick={(e) => {
            e.currentTarget.classList.remove("collapsed");
          }}
        >
          <Markdown>{product.description}</Markdown>
          <span className="collapse">...ver mais</span>
        </span>
        <span className="product-price">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <span className="divider"></span>
        <ProductCounter product={product} />
      </div>
    </main>
  );
};

export default ProductDetails;
