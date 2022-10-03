import React, { createContext, useState } from "react";

export const FavContext = createContext();

const FavContextProvider = ({ children }) => {
  const [favItem, setFavItem] = useState(1);
  const data = { favItem, setFavItem };
  return <FavContext.Provider value={data}>{children}</FavContext.Provider>;
};

export default FavContextProvider;
