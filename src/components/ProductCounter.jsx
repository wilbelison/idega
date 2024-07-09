import iconRemove from "../assets/images/icon-remove.svg";
import iconAdd from "../assets/images/icon-add.svg";

const ProductCounter = ({ productId }) => {
  return (
    <div className="ProductCounter">
      <button
        className="button-remove"
        onClick={(e) => {
          e.preventDefault();
          console.log("remove:", productId);
        }}
      >
        <img src={iconRemove} alt="Adicionar" />
      </button>
      <span className="counter">0</span>
      <button
        className="button-add"
        onClick={(e) => {
          e.preventDefault();
          console.log("add:", productId);
        }}
      >
        <img src={iconAdd} alt="Remover" />
      </button>
    </div>
  );
};

export default ProductCounter;
