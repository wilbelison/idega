import { NavLink } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";

const NavBar = () => {
  const { categories } = useDatabase();
  console.log(categories)

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
            <NavLink to={`/category/${item.slug}`} activeclassname="active">
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
