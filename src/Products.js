import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loading/Loader";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

const Products = ({setFavId}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="container relative">
      {loading && <Loader />}
      {!loading && (
        <div className="flex justify-center mb-5">
          <Navbar />
        </div>
      )}
      <div className="flex items-center justify-center flex-wrap gap-5">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} setFavId={setFavId} />
        ))}
      </div>
    </div>
  );
};

export default Products;
