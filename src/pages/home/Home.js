import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import AdminOnlyRoute from "../../components/adminOnlyRoute/AdminOnlyRoute";
import Product from "../../components/product/Product";

const Home = () => {
  // const [allProducts, setAllProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setAllProducts(data));
  // }, []);
  // console.log(allProducts);

  return (
    <div>
      <Product />
    </div>
  );
};

export default Home;
