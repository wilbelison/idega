import iconSearch from "../assets/images/icon-search.svg";
import iconClear from "../assets/images/icon-clear.svg";

const Search = () => {
  return (
    <form className="Search">
      <label htmlFor="search">
        <img src={iconSearch} alt="Busca" />
      </label>
      <input
        type="text"
        id="search"
        name="search"
        autoComplete="off"
        placeholder="Busque por item ou loja"
        className="search-input"
      />
      <button className="search-clear">
        <img src={iconClear} alt="Limpar campo" />
      </button>
    </form>
  );
};

export default Search;
