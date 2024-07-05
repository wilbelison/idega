import ProductCounter from "./ProductCounter";

const ProductCard = ({ product, updateCart }) => {
  console.log(product);
  return (
    <div className={"ProductCard id-" + product.id}>
      <h3 className="card-name">{product.title}</h3>
      <p className="card-price">{product.price}</p>
      <ProductCounter counter={product.cart} stock={product.stock} updateCart={updateCart}  />
    </div>
  );
};

export default ProductCard;
