import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <a href="/" title="Voltar para a Home" className="Logo">
      <img src={logo} alt="iDega" />
    </a>
  );
};

export default Logo;
