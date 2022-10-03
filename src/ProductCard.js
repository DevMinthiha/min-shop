import React, { useContext, useEffect, useState } from "react";
import { ImPriceTag } from "react-icons/im";
import {
  AiFillStar,
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineEye,
} from "react-icons/ai";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { FavContext } from "./content/FavContext";

const ProductCard = ({ product }) => {
  const [fav, setFav] = useState(false);
  let { favItem, setFavItem } = useContext(FavContext);

  const favHandler = () => {
    setFav(!fav);
  };

  const favItemsHandler = () => {
    switch (fav) {
      case true:
        return setFavItem((favItem += 1));
      case false:
        return setFavItem((favItem -= 1));
      default:
        return favItem;
    }
  };

  useEffect(() => {
    favItemsHandler();
  }, [fav]);

  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-gray-50 w-60 rounded-lg border-0 shadow-xl p-5">
      <p className="flex items-center gap-2 text-gray-500">
        {product.category}
        <button
          onClick={favHandler}
          className={`border rounded-full p-2 shadow-md ${
            fav && "text-red-500"
          }`}
        >
          <AiFillHeart className="text-xl" />
        </button>
      </p>
      <hr className="w-full bg-gray-800" />
      <img
        src={product.image}
        style={{ width: "100px", height: "150px" }}
        alt=""
      />
      <h2 className="font-bold text-gray-700">
        {product.title.slice(0, 15)}...
      </h2>
      <p className="flex items-center gap-2 text-gray-700">
        <ImPriceTag className="text-yellow-500" />
        price - {product.price}
      </p>
      <p className="flex items-center text-gray-700">
        <AiFillStar className="text-yellow-500" />
        rating - {product.rating.rate}
      </p>
      <div className="flex items-center gap-3">
        <Tooltip title="cart">
          <IconButton>
            <AiOutlineShoppingCart className="text-green-500 text-3xl" />
          </IconButton>
        </Tooltip>
        <Link to={`/detail/${product.id}`}>
          <Tooltip title="detail">
            <IconButton>
              <AiOutlineEye className="text-blue-500 text-3xl" />
            </IconButton>
          </Tooltip>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
