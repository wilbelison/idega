import { useState } from "react";
import { useNavigate } from "react-router-dom";

import iconSearch from "../assets/images/icon-search.svg";
import iconClear from "../assets/images/icon-clear.svg";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate({ pathname: "/busca", search: "?q=" + query });
  };

  return (
    <form className="Search">
      <input
        type="text"
        id="search"
        name="q"
        autoComplete="off"
        placeholder="Busque por item ou marca"
        className="search-input"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") query.length > 0 && handleSubmit();
        }}
      />
      <label htmlFor="search">
        <img src={iconSearch} alt="Busca" />
      </label>
      <button
        className={`search-clear ${query.length > 0 ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setQuery("");
        }}
      >
        <img src={iconClear} alt="Limpar campo" />
      </button>
    </form>
  );
};

export default Search;
