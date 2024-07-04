const NavBar = ({ menuItems }) => {
  console.log(menuItems);
  return (
    <nav className="NavBar">
      <ul className="nav-ul">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
