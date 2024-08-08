import { useState, useEffect } from "react";
import Loader from "./components/Loader";

import { BrowserRouter } from "react-router-dom";
import Router from "./router";

import { AuthContextProvider } from "./context/AuthContext";
import { DatabaseContextProvider } from "./context/DatabaseContext";

import "./assets/styles/default.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <AuthContextProvider>
            <DatabaseContextProvider>
              <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
                <Router />
              </BrowserRouter>
            </DatabaseContextProvider>
          </AuthContextProvider>
        </>
      )}
    </div>
  );
}

export default App;
