const Productcount = ({ count, stock, updateCount }) => {
  return (
    <div className="Productcount">
      <button
        className="button-remove"
        onClick={() => {
          count > 1 ? updateCount(count--) : updateCount(0);
        }}
      >
        -
      </button>
      <input
        className="input-count"
        type="text"
        value={count}
        onClick={() => {
          this.value >= 0 ? updateCount(this.value) : updateCount(count);
        }}
      />
      <div className="Productcount">
      <button
        className="button-add"
        onClick={() => {
          count < stock ? updateCount(count++) : updateCount(0);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Productcount;
