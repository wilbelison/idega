import { useParams } from "react-router-dom";

const Category = ({ categories }) => {
  const { categorySlug } = useParams();

  const category = categories.filter((category) => category.slug === categorySlug)[0];

  return (
    <main className="Category">
      <h1 className="title">{category.title}</h1>
    </main>
  );
};

export default Category;
