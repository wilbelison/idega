import { useEffect, useState } from "react";

const Database = () => {
  const [Categories, setCategories] = useState([]);
  const [Catalog, setCatalog] = useState([]);
  const [Cart, setCart] = useState([]);

  useEffect(() => {
    /* Categories */
    if (localStorage.getItem("Categories")) {
      setCategories(JSON.parse(localStorage.getItem("Categories")));
    } else {
      const url = "/database/Categories.json";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setCategories(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    /* Catalog */
    if (localStorage.getItem("Catalog")) {
      setCatalog(JSON.parse(localStorage.getItem("Catalog")));
    } else {
      const url = "/database/Catalog.json";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setCatalog(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    /* Cart */
    if (localStorage.getItem("Cart")) {
      setCart(JSON.parse(localStorage.getItem("Cart")));
    } else {
      const url = "/database/Cart.json";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setCart(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  window.getCategories = () => {
    return Categories;
  };
  window.getCatalog = () => {
    return Catalog;
  };
  window.getCart = () => {
    return Cart;
  };
};

export default Database;
