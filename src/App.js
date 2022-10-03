import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Products from "./Products";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
