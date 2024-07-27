import React, {
  useContext,
  useState,
  useEffect,
  createContext,
  useCallback,
} from "react";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  limit,
} from "firebase/firestore";
import db from "../services/firebase";

const DatabaseContext = createContext();

export function DatabaseContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [catalog, setCatalog] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartView, setCartView] = useState(false);

  // Funções utilitárias de JSON e localStorage
  const getItemJSON = useCallback((item) => {
    return JSON.parse(localStorage.getItem(item) || "null");
  }, []);

  const setItemJSON = useCallback((item, data) => {
    localStorage.setItem(item, JSON.stringify(data));
  }, []);

  // Função genérica para buscar itens por propriedade
  const findByProperty = (array, property, value) => {
    return array.find((item) => item[property] === value);
  };

  // Funções de categorias
  const getCategoryById = useCallback(
    (id) => {
      return findByProperty(categories, "id", id);
    },
    [categories]
  );

  const getCategoryBySlug = useCallback(
    (slug) => {
      return findByProperty(categories, "slug", slug);
    },
    [categories]
  );

  // Funções de marcas
  const getBrandById = useCallback(
    (id) => {
      return findByProperty(brands, "id", id);
    },
    [brands]
  );

  const getBrandBySlug = useCallback(
    (slug) => {
      return findByProperty(brands, "slug", slug);
    },
    [brands]
  );

  // Funções de catálogo
  const getProductById = useCallback(
    (id) => {
      return findByProperty(catalog, "id", id);
    },
    [catalog]
  );

  const getProductBySlug = useCallback(
    (slug) => {
      return findByProperty(catalog, "slug", slug);
    },
    [catalog]
  );

  // Funções do carrinho
  const toggleCartView = () => {
    setCartView(!cartView);
  };

  const getCartItemById = useCallback(
    (id) => {
      return findByProperty(cart, "id", id);
    },
    [cart]
  );

  const setCartItemCount = useCallback(
    (id, count, itemDetails) => {
      setCart((prevCart) => {
        const itemExists = prevCart.some((item) => item.id === id);

        let updatedCart;

        if (!itemExists) {
          updatedCart = [...prevCart, { id, ...itemDetails, count }];
        } else {
          updatedCart = prevCart
            .map((item) => {
              if (item.id === id) {
                return { ...item, count: count };
              }
              return item;
            })
            .filter((item) => item.count > 0);
        }

        setItemJSON("cart", updatedCart);
      });
    },
    [setItemJSON]
  );

  // Configura os dados iniciais do JSON ou Firebase
  useEffect(() => {
    const itemsCollection = collection(db, "catalog");
    getDocs(itemsCollection).then((snapshot) => {
      const firebaseCatalog =
        snapshot.size !== 0
          ? snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          : "Nenhum resultado encontrado";
      console.log(firebaseCatalog);
    });

    const queryCollection = query(
      collection(db, "catalog"),
      where("id", "==", 3),
      limit(1)
    );

    getDocs(queryCollection).then((snapshot) => {
      const firebaseCatalog =
        snapshot.size !== 0
          ? snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          : "Nenhum resultado encontrado";
      console.log(firebaseCatalog);
    });

    const setInitialData = async (
      JSONurl,
      setStateFunction,
      localStorageItem
    ) => {
      try {
        const localData = getItemJSON(localStorageItem);
        if (localData) {
          setStateFunction(localData);
        } else {
          const response = await fetch(JSONurl);
          const data = await response.json();
          setItemJSON(localStorageItem, data);
          setStateFunction(data);
        }
      } catch (error) {
        console.error(`Erro ao buscar dados de ${localStorageItem}:`, error);
      }
    };

    setInitialData("/database/Categories.json", setCategories, "categories");
    setInitialData("/database/Brands.json", setBrands, "brands");
    setInitialData("/database/Catalog.json", setCatalog, "catalog");
    setInitialData("/database/Cart.json", setCart, "cart");
  }, [setItemJSON]);

  return (
    <DatabaseContext.Provider
      value={{
        categories,
        brands,
        catalog,
        cart,
        cartView,
        toggleCartView,
        getCategoryById,
        getCategoryBySlug,
        getBrandById,
        getBrandBySlug,
        getProductById,
        getProductBySlug,
        getCartItemById,
        setCartItemCount,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
}

export function useDatabase() {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error(
      "useDatabase deve ser usado dentro de um DatabaseContextProvider"
    );
  }
  return context;
}
