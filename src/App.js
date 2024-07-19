import { useState, useEffect } from "react";
import Loader from "./components/Loader";

import { BrowserRouter } from "react-router-dom";
import Router from "./router";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { DatabaseContextProvider } from "./context/DatabaseContext";

import "./assets/styles/default.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <DatabaseContextProvider>
            <BrowserRouter>
              <Header />
              <Router />
              <Footer />
            </BrowserRouter>
          </DatabaseContextProvider>
        </>
      )}
    </div>
  );
}

export default App;
