import { Link } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";

const Breadcrumb = ({ product }) => {
  const { categories } = useDatabase();

  const category = categories.filter((item) => item.id === product.category)[0];

  return (
    <nav className="Breadcrumb">
      <ul>
        <li className="breadcrumb-link">
          <Link to="/">Início</Link>
        </li>
        <li className="breadcrumb-divider">/</li>
        <li className="breadcrumb-link">
          <Link to={`/categoria/${category.slug}`}>{category.title}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
