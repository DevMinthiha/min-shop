import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImPriceTag } from "react-icons/im";
import { Link, useParams } from "react-router-dom";
import { AiFillStar, AiOutlineRollback } from "react-icons/ai";
import { Button } from "@mui/material";
import Loader from "./Loading/Loader";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchProduct = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && product && (
        <div className="container">
          <Link to="/">
            <Button variant="contained" color="error">
              <AiOutlineRollback />
            </Button>
          </Link>
          <div className="flex flex-col">
            <img
              src={product.image}
              width="200px"
              height={"auto"}
              className="mx-auto mb-5"
              alt=""
            />
            <h1 className="text-2xl font-bold tracking-wider text-gray-700 mb-5">
              {product.title}
            </h1>
            <p className="mb-5 text-gray-400 font-bold">
              <span className="text-blue-400 font-bold text-xl">Category</span>{" "}
              - {product.category}
            </p>
            <p className="text-blue-400 font-bold text-xl">Description</p>
            <p className="text-gray-400 font-bold mb-5">
              {product.description}
            </p>
            <p className="flex items-center gap-2 mb-5">
              <ImPriceTag className="text-xl text-yellow-500" />
              <span className="text-blue-400 font-bold text-xl">Price - </span>
              <span className="text-gray-400 font-bold">${product.price}</span>
            </p>
            <div className="flex items-center gap-2 mb-5">
              <AiFillStar className="text-yellow-500 text-2xl" />
              <p className="text-blue-400 font-bold text-xl">Rating - </p>
              <span className="text-gray-400 font-bold">
                {product.rating?.rate}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
