import { NavLink } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";

const NavBar = () => {
  const { categories } = useDatabase();

  return (
    <nav className="NavBar">
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Início
          </NavLink>
        </li>
        {categories.map((item) => (
          <li key={item.id}>
            <NavLink to={`/categoria/${item.slug}`} activeclassname="active">
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
