import React, { useEffect, useState } from "react";
import styles from "./Product.module.scss";
import ProductFilter from "./productFilter/ProductFilter";
import ProductList from "./productList/ProductList";
import { data } from "../../data/data";

const Product = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState([]);
  // const allData = () => {
  //   axios.get("https://fakestoreapi.com/products").then((response) => {
  //     console.log(response);
  //     const myData = response.data;
  //     setData(myData);
  //   });
  // };
  // useEffect(() => allData, []);
  console.log(data);
  return (
    <section>
      <div className={`container ${styles.product}`}>
        <aside className={styles.filter}>
          <ProductFilter />
        </aside>
        <div className={styles.content}>
          {isLoading ? (
            <img
              src={require("../../assets/images/loader-spinning.gif")}
              alt="Loading ..."
              style={{ width: "50px" }}
              className=" --center-all"
            />
          ) : (
            <ProductList products={data} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
