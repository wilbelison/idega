import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-colum">
        <h3 className="title">Colum Title</h3>
        <ul>
          <li>
            <Link to="/">Link 1</Link>
          </li>
          <li>
            <Link to="/">Link 2</Link>
          </li>
          <li>
            <Link to="/">Link 3</Link>
          </li>
        </ul>
      </div>
      <div className="footer-colum">
        <h3 className="title">Colum Title</h3>
        <ul>
          <li>
            <Link to="/">Link 1</Link>
          </li>
          <li>
            <Link to="/">Link 2</Link>
          </li>
          <li>
            <Link to="/">Link 3</Link>
          </li>
        </ul>
      </div>
      <div className="footer-colum">
        <h3 className="title">Colum Title</h3>
        <ul>
          <li>
            <Link to="/">Link 1</Link>
          </li>
          <li>
            <Link to="/">Link 2</Link>
          </li>
          <li>
            <Link to="/">Link 3</Link>
          </li>
        </ul>
      </div>
      <div className="footer-colum">
        <h3 className="title">Colum Title</h3>
        <ul>
          <li>
            <Link to="/">Link 1</Link>
          </li>
          <li>
            <Link to="/">Link 2</Link>
          </li>
          <li>
            <Link to="/">Link 3</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
