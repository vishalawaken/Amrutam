import React from "react";
import Announcement_Bar from "./components/Announcement_Bar";
import Navbar from "./components/Navbar";
import Search_Bar from "./components/Search_Bar";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About_Us from "./Pages/About_Us";
import Cart from "./Pages/Cart";
import Footer from "./components/Footer";
import Product from "./Pages/Product";
import Categories from "./components/Categories";
import Play_Store from "./components/Play_Store";
import Ingredients from "./Pages/Ingredients";

const App = () => {
  return (
    <div>
      <Announcement_Bar></Announcement_Bar>
      <Navbar></Navbar>
      <Search_Bar></Search_Bar>
      <Categories></Categories>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/product/:productId" element={<Product></Product>}></Route>
        <Route path="/about-us" element={<About_Us></About_Us>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route
          path="/ingredient/:ingredientName"
          element={<Ingredients></Ingredients>}
        ></Route>
      </Routes>
      <Play_Store></Play_Store>
      <Footer></Footer>
    </div>
  );
};
export default App;
