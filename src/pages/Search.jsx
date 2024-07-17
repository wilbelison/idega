import { useLocation } from 'react-router-dom';

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  return (
    <main className="Search">
      <h1 className="title">Buscando por {query}</h1>
    </main>
  );
};

export default Search;
