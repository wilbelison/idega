import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryId } = useParams();

  return (
    <main className="Cart">
      <h1>Category</h1>
      <h2>{categoryId}</h2>
    </main>
  );
};

export default Category;