import { useParams } from "react-router-dom";

const Category = () => {
  const { categorySlug } = useParams();

  return (
    <main className="Cart">
      <h1>Category</h1>
      <h2>{categorySlug}</h2>
    </main>
  );
};

export default Category;