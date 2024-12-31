import React from "react";
import { Products } from "../data/products";
import styles from "../styles/Product.module.css";

import { useLocation, useNavigate } from "react-router-dom";
const Product = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryparams = new URLSearchParams(location.search);
  console.log(queryparams);

  // extract the parameters
  const category = queryparams.get("category");
  const sort = queryparams.get("sort");

  // Filtering the products
  const filteredProducts = Products.filter((product) =>
    category ? product.category === category : true
  );
  console.log(filteredProducts);

  // sorting the products
  if (sort === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "des") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  function HandleFilter(key, value) {
    if (value) {
      queryparams.set(key, value);
    } else {
      queryparams.delete(key);
    }
    navigate(`?${queryparams.toString()}`);
  }
  return (
    <>
      <div className="flex justify-center">
        <h4 className="text-center font-bold text-3xl pt-4 pb-1 border-b-2 border-gray-400 inline-block">
           Best Shop
        </h4>
      </div>

      <h3 className="container mx-auto font-bold text-[1.5rem] pb-5">
        Filter By Category
      </h3>

      <div className="container mx-auto flex flex-col gap-4">
        {/* Category Filters Start */}
        <div className="flex justify-start gap-3">
          <button
            className="border-2 border-gray-400 md:text-[1.2rem] font-bold p-1 md:p-2 rounded-full"
            type="button"
            onClick={() => HandleFilter("category", "men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="border-2 border-gray-400 md:text-[1.2rem] font-bold p-1 md:p-2 rounded-full"
            type="button"
            onClick={() => HandleFilter("category", "women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="border-2 border-gray-400 md:text-[1.2rem] font-bold p-1 md:p-2 rounded-full"
            type="button"
            onClick={() => HandleFilter("category", "electronics")}
          >
            Electronics
          </button>
          <button
            className="border-2 border-gray-400 md:text-[1.2rem] font-bold p-1 md:p-2 rounded-full"
            type="button"
            onClick={() => HandleFilter("category", "jewelery")}
          >
            Jwelary
          </button>
          <button
            className="border-2 border-gray-400 md:text-[1.2rem] font-bold p-1 md:p-2 rounded-full"
            type="button"
            onClick={() => HandleFilter("category", "")}
          >
            All Products
          </button>
        </div>
        {/* Category Filters End */}
        {/* Sorting Buttons Start */}
        <div className="flex justify-start gap-3 ">
          <button
            className="border-2 border-gray-400 md:text-[1.2rem] font-bold py-1 md:py-2 px-8 rounded-full"
            type="button"
            onClick={() => HandleFilter("sort", "asc")}
          >
            Low
          </button>
          <button
            className="border-2 border-gray-400 md:text-[1.2rem] font-bold py-1 md:py-2 px-8 rounded-full"
            type="button"
            onClick={() => HandleFilter("sort", "des")}
          >
            High
          </button>
        </div>
        {/* Sorting Buttons End */}
      </div>

      {/* Products Start */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center align-items-center gap-4  p-4 ">
        {filteredProducts.length > 0
          ? filteredProducts.map((ele) => (
              <>
                <div className="border-2 border-gray-400 rounded-md w-[300px] p-3 flex flex-col justify-center items-center gap-3">
                  <span className="font-bold">{ele.title}</span>
                  <img src={ele.image} className={styles.cardImage} alt="" />
                  <span className="font-bold">${ele.price}</span>
                  <span>
                    {ele.rating.rate}⭐
                    <span className="ms-2">
                      {" "}
                      <b>Total Buy : </b> {ele.rating.count}
                    </span>
                  </span>
                </div>
              </>
            ))
          : "No Products Found"}
      </div>
      {/* Products End */}
    </>
  );
};

export default Product;
