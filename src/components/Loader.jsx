const Loader = () => {
  const text = ("Carregando...").split("");
  return (
    <div className="Loader">
      {text.map((char, key) => (
        <span className="letter" key={key}>{char}</span>
      ))}
    </div>
  );
};

export default Loader;
