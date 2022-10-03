import { Badge, Tooltip } from "@mui/material";
import React, { useContext } from "react";
import { AiFillHeart, AiOutlineShoppingCart, AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FavContext } from "./content/FavContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { favItem } = useContext(FavContext);
  return (
    <div className="flex gap-10 px-20 py-3 rounded-full border shadow-xl">
      <Tooltip title="favourite">
        <Badge badgeContent={favItem} color="error">
          <button className={`border rounded-full p-2 shadow-md text-red-500`}>
            <AiFillHeart className="text-xl" />
          </button>
        </Badge>
      </Tooltip>
      <Tooltip title="home">
        <button
          className={`border rounded-full p-2 shadow-md text-blue-500`}
          onClick={() => navigate("/")}
        >
          <AiFillHome className="text-xl" />
        </button>
      </Tooltip>
      <Tooltip title="cart">
        <Badge badgeContent={1} color="success">
          <button className="border rounded-full p-2 shadow-md text-green-500">
            <AiOutlineShoppingCart className="text-xl" />
          </button>
        </Badge>
      </Tooltip>
    </div>
  );
};

export default Navbar;
