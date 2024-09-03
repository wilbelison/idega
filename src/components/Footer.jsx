import { Link } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";

const Footer = () => {
  const { categories, brands } = useDatabase();
  return (
    <footer className="Footer">
      <div className="footer-colum">
        <h3 className="title">iDega</h3>
        <ul>
          <li>Sobre</li>
          <li>Termos de uso</li>
          <li>Política de privacidade</li>
        </ul>
      </div>
      <div className="footer-colum">
        <h3 className="title">Navegue por Categorias</h3>
        <ul>
          {categories.map((item) => (
            <li key={item.id}>
              <Link to={`/categoria/${item.slug}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-colum">
        <h3 className="title">Navegue por Marcas</h3>
        <ul>
          {brands.map((item) => (
            <li key={item.id}>
              <Link to={`/marca/${item.slug}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-colum">
        <h3 className="title">Desenvolvido por</h3>
        <ul>
          <li>
            <Link to="https://www.linkedin.com/in/wilbelison/">
              LinkedIn do Wil
            </Link>
          </li>
          <li>
            <Link to="https://github.com/wilbelison/idega">Github do Projeto</Link>
          </li>
          <li>
            <Link to="https://wil.work">Wil.Work</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
