import { useParams } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";

const Category = () => {
  const { categorySlug } = useParams();
  const { categories } = useDatabase();

  const category = categories.filter(
    (category) => category.slug === categorySlug
  )[0];

  return (
    <main className="Category">
      <h1 className="title">{category.title}</h1>
    </main>
  );
};

export default Category;
