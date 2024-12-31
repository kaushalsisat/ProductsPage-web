import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar></Navbar>

      {/* Routing Setup */}
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/about" element={<About />}>
          About Us
        </Route>
        <Route path="/product" element={<Product />}>
          Products
        </Route>
        <Route path="/contact" element={<Contact />}>
          Contact Us
        </Route>
        <Route path="*" element={<PageNotFound />}>
          Contact Us
        </Route>
      </Routes>
    </>
  );
};

export default App;
