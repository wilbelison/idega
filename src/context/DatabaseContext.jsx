import React, { useContext, useState, useEffect, createContext } from "react";
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

  // Funções utilitárias de JSON e localStorage
  const getItemJSON = useCallback((item) => {
    return JSON.parse(localStorage.getItem(item) || "null");
  }, []);

  const setItemJSON = useCallback((item, data) => {
    console.log(`Salvando ${item} no localStorage`, data);
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
  const getCartItemById = useCallback(
    (id) => {
      return findByProperty(cart, "id", id);
    },
    [cart]
  );

  const setCartItemCount = useCallback(
    (id, count, itemDetails) => {
      console.log(`Atualizando item ${id} com quantidade ${count}`);
      setCart((prevCart) => {
        // Verifica se o item existe no carrinho
        const itemExists = prevCart.some((item) => item.id === id);

        let updatedCart;

        if (!itemExists) {
          console.warn(
            `Item com id ${id} não encontrado no carrinho. Criando novo item.`
          );
          // Adiciona o novo item com a quantidade especificada
          updatedCart = [...prevCart, { id, ...itemDetails, count }];
        } else {
          // Atualiza a quantidade do item existente
          updatedCart = prevCart
            .map((item) => {
              if (item.id === id) {
                return { ...item, count: count }; // Retorna uma cópia do item com a quantidade atualizada
              }
              return item; // Retorna o item sem alterações
            })
            .filter((item) => item.count > 0); // Remove itens com quantidade zero
        }

        setItemJSON("cart", updatedCart); // Atualiza o localStorage
        return updatedCart;
      });
    },
    [setItemJSON]
  );

  // Configura os dados iniciais do banco de dados
  useEffect(() => {

    // puxando dados do firebase
    const itemsCollection = collection(db, "catalog");
    getDocs(itemsCollection).then((snapshot) => {
      console.log(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
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
  }, [getItemJSON, setItemJSON]);

  return (
    <DatabaseContext.Provider
      value={{
        categories,
        brands,
        catalog,
        cart,
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
