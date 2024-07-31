import React, {
  useContext,
  useState,
  useEffect,
  createContext,
  useCallback,
} from "react";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import db from "../services/firebase";

const DatabaseContext = createContext();

export function DatabaseContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [catalog, setCatalog] = useState([]);
  const [cart, setCart] = useState({
    items: [],
    total: { count: 0, price: 0.0 },
  });
  const [cartView, setCartView] = useState(false);

  const getStoreJSON = useCallback((item) => {
    return JSON.parse(localStorage.getItem(item) || "null");
  }, []);

  const setStoreJSON = useCallback((item, data) => {
    localStorage.setItem(item, JSON.stringify(data));
  }, []);

  const toggleCartView = () => {
    setCartView(!cartView);
  };

  function updateCart(product, count) {
    let newItems = [...cart.items];
    const itemIndex = newItems.findIndex((item) => item.id === product.id);

    if (itemIndex !== -1) {
      // Item exists in the cart
      if (count <= 0) {
        // Remove the item if count is less than or equal to 0
        newItems.splice(itemIndex, 1);
      } else {
        // Update the count of the existing item
        newItems[itemIndex].count = count;
      }
    } else if (count > 0) {
      // Add new item to the cart if count is greater than 0
      newItems.push({ ...product, count });
    }

    // Calculate the new totals using reduce
    const newTotal = newItems.reduce(
      (acc, item) => {
        acc.count += item.count;
        acc.price += item.count * item.price;
        return acc;
      },
      { count: 0, price: 0 }
    );

    // Update the state with the new cart items and totals
    setCart({
      items: newItems,
      total: newTotal,
    });

    setStoreJSON("cart", {
      items: newItems,
      total: newTotal,
    });
  }

  useEffect(() => {
    const firebaseCatalog = collection(db, "catalog");
    getDocs(firebaseCatalog).then((snapshot) => {
      const data =
        snapshot.size !== 0
          ? snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          : "Nenhum resultado encontrado";
      setCatalog(data);
    });

    const firebaseCategories = collection(db, "categories");
    getDocs(firebaseCategories).then((snapshot) => {
      const data =
        snapshot.size !== 0
          ? snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          : "Nenhum resultado encontrado";
      setCategories(data);
    });

    // const queryCollection = query(
    //   collection(db, "catalog"),
    //   where("id", "==", 3),
    //   limit(1)
    // );

    // getDocs(queryCollection).then((snapshot) => {
    //   const firebaseCatalog =
    //     snapshot.size !== 0
    //       ? snapshot.docs.map((doc) => ({
    //           id: doc.id,
    //           ...doc.data(),
    //         }))
    //       : "Nenhum resultado encontrado";
    //   console.log(firebaseCatalog);
    // });

    if (getStoreJSON("cart")) {
      setCart(getStoreJSON("cart"));
    } else {
      setStoreJSON("cart", cart);
    }
  }, []);

  return (
    <DatabaseContext.Provider
      value={{
        categories,
        catalog,
        cart,
        cartView,
        toggleCartView,
        updateCart,
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
