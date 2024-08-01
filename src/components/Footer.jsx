import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-colum">
        <h3 className="title">Wil's links</h3>
        <ul>
          <li>
            <Link to="https://www.linkedin.com/in/wilbelison/">LinkedIn</Link>
          </li>
          <li>
            <Link to="https://github.com/wilbelison">Github</Link>
          </li>
          <li>
            <Link to="https://wil.work">Portfólio</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
