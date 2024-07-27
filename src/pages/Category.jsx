import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CartView from "../components/CartView";
import Loader from "../components/Loader";

const Category = () => {
  const { categorySlug } = useParams();
  const { categories } = useDatabase();

  const [category, setCategory] = useState(null);

  useEffect(() => {
    const findCategory = categories.find((item) => item.slug === categorySlug);
    if (findCategory) {
      setCategory(findCategory);
    }
  }, [categorySlug]);

  if (!category) {
    return <Loader />;
  }

  return (
    <>
    <Header />
      <main className="Category">
        <h1 className="title">{category.title}</h1>
      </main>
      <Footer />
      <CartView />
    </>
  );
};

export default Category;
