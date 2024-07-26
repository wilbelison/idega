import React, { useContext, useState, useEffect, createContext } from "react";
import db from "../services/firebase";

const DatabaseContext = createContext();

export function DatabaseContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [catalog, setCatalog] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function setData(url, setStateFunction, localStorageName) {
      if (localStorage.getItem(localStorageName)) {
        setStateFunction(JSON.parse(localStorage.getItem(localStorageName)));
      } else {
        await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem(localStorageName, JSON.stringify(data));
            setStateFunction(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    /* sample data */

    setData("/database/Categories.json", setCategories, "categories");
    setData("/database/Catalog.json", setCatalog, "catalog");
    setData("/database/Cart.json", setCart, "cart");
  }, []);
  return (
    <DatabaseContext.Provider
      value={{
        categories,
        catalog,
        cart,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
}

export function useDatabase() {
  const context = useContext(DatabaseContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
