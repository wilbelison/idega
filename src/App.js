import { BrowserRouter } from "react-router-dom";
import Router from "./router";

import Database from "./components/Database";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./assets/styles/default.css";

function App() {
  return (
    <div className="App">
      <Database />
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
