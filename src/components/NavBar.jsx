import { NavLink } from "react-router-dom";

const NavBar = () => {
  const categories = [
    {
      id: 0,
      title: "Cervejas",
      slug: "cervejas",
    },
    {
      id: 1,
      title: "Vinhos",
      slug: "vinhos",
    },
    {
      id: 2,
      title: "Destilados",
      slug: "destilados",
    },
    {
      id: 3,
      title: "Não Alcóolicos",
      slug: "nao-alcoolicos",
    },
    {
      id: 4,
      title: "Tabacaria",
      slug: "tabacaria",
    },
    {
      id: 5,
      title: "Snacks e outros",
      slug: "snacks-e-outros",
    },
  ];

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
