import iconSearch from "../assets/images/icon-search.svg";

const Search = () => {
  return (
    <div className="Search">
      <label htmlFor="search-input"><img src={iconSearch} alt="Busca" /></label>
      <input type="text" name="q" autoComplete="off" placeholder="Busque por item ou loja" className="search-input"/>
    </div>
  );
};

export default Search;
