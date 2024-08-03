import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CartView from "../components/CartView";
import Loader from "../components/Loader";

const Brand = () => {
  const { brandSlug } = useParams();
  const { brands } = useDatabase();

  const [brand, setBrand] = useState(null);

  useEffect(() => {
    const findBrand = brands.find((item) => item.slug === brandSlug);
    if (findBrand) {
      setBrand(findBrand);
    }
  }, [brandSlug]);

  if (!brand) {
    return <Loader />;
  }

  return (
    <>
    <Header />
      <main className="Brand">
        <h1 className="title">{brand.title}</h1>
      </main>
      <Footer />
      <CartView />
    </>
  );
};

export default Brand;
