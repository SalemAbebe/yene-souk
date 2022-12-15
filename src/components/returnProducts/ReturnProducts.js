import React from "react";
import { Link } from "react-router-dom";

const ReturnProducts = () => {
  return (
    <section>
      <div className="container">
        <h2> Your return Request is processing ...</h2>

        <br />

        <button className="--btn">
          <Link to="/#products">Back To Shop</Link>
        </button>
      </div>
    </section>
  );
};

export default ReturnProducts;
