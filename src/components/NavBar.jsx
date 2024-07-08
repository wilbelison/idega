import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navItems = [
    {
      title: "Ação e Aventura",
      id: 0,
    },
    {
      title: "Luta e Esportes",
      id: 1,
    },
    {
      title: "Plataforma",
      id: 2,
    },
    {
      title: "Puzzle e Casual",
      id: 3,
    },
    {
      title: "RPG e Estratégia",
      id: 4,
    },
    {
      title: "Mais Gêneros",
      id: 5,
    },
  ];

  return (
    <nav className="NavBar">
      <ul className="nav-ul">
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink to={`/category/${item.id}`} activeclassname="active">
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
