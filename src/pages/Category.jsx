import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";

import Loader from "../components/Loader";

const Category = () => {
  const { categorySlug } = useParams();
  const { categories } = useDatabase();

  const [category, setCategory] = useState(null);

  useEffect(() => {
    const findCategory = categories.find((item) => item.slug === categorySlug);
    if (findCategory) {
      setCategory(findCategory);
      console.log(findCategory);
    }
  }, [categories, categorySlug]);

  if (!category) {
    return <Loader />;
  }

  return (
    <main className="Category">
      <h1 className="title">{category.title}</h1>
    </main>
  );
};

export default Category;
