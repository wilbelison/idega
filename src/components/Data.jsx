import { useEffect, useState } from "react";

const Data = () => {
  const [Categories, setCategories] = useState([]);
  const [Catalog, setCatalog] = useState([]);
  const [Cart, setCart] = useState([]);

  useEffect(() => {
    /* Categories */
    if (localStorage.getItem("Categories")) {
      setCategories(JSON.parse(localStorage.getItem("Categories")));
    } else {
      const url = "/data/Categories.json";
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
      const url = "/data/Catalog.json";
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
      const url = "/data/Cart.json";
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

export default Data;
