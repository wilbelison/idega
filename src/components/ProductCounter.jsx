const ProductCounter = ({ productId }) => {
  return (
    <div className="ProductCount">
      <button
        className="button-remove"
        onClick={() => {
          console.log("remove:", productId);
        }}
      >
        -
      </button>
      <span className="counter">0</span>
      <button
        className="button-add"
        onClick={() => {
          console.log("add:", productId);
        }}
      >
        +
      </button>
    </div>
  );
};

export default ProductCounter;
