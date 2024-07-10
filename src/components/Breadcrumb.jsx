import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <nav className="Breadcrumb">
      <ul>
        <li className="breadcrumb-link">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-divider">/</li>
        <li className="breadcrumb-link">
          <Link to="/category/cervejas">Cervejas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
