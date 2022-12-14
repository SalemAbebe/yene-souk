import React, { useEffect, useState } from "react";
import styles from "../cart/Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  CALCULATE_TOTAL_WISHLIST_QUANTITY,
  REMOVE_FROM_WISHLIST,
  SAVE_URL,
  selectWishListItems,
  CLEAR_WISHLIST,
} from "../../redux/slice/wishListSlice";
import { ADD_TO_CART, selectCartItems } from "../../redux/slice/cartSlice";
// import { selectCartItems } from "../../redux/slice/cartSlice";
import { Link, useParams } from "react-router-dom";
import useFetchDocument from "../../customHooks/useFetchDocument";

const WishList = () => {
  const { id } = useParams();
  const [isCartAdded, setIsCartAdded] = useState("");
  const [cart, setCart] = useState("");
  const [product, setProduct] = useState(null);
  const wishListItems = useSelector(selectWishListItems);
  const cartItems = useSelector(selectCartItems);
  const { document } = useFetchDocument("products", id);
  const dispatch = useDispatch();
  // const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    console.log(cartItems);
    if (cartItems.length > 0) {
      setCart(cartItems.find((cart) => cart.id === id));
      setIsCartAdded(
        cartItems.findIndex((cart) => {
          return cart.id === id;
        })
      );
    }
  }, [cartItems]);

  useEffect(() => {
    setProduct(document);
  }, [document]);

  // const addToCart = (product) => {
  //   dispatch(ADD_TO_CART(product));
  //   dispatch(CALCULATE_TOTAL_QUANTITY());
  // };

  const addToCart = (wishList) => {
    dispatch(ADD_TO_CART(wishList));
    dispatch(CALCULATE_TOTAL_WISHLIST_QUANTITY());
    dispatch(REMOVE_FROM_WISHLIST(wishList));
  };

  const removeFromWishList = (wishList) => {
    dispatch(REMOVE_FROM_WISHLIST(wishList));
  };

  const clearWishList = () => {
    dispatch(CLEAR_WISHLIST());
  };

  useEffect(() => {
    dispatch(CALCULATE_TOTAL_WISHLIST_QUANTITY());
    dispatch(SAVE_URL(""));
  }, [wishListItems, dispatch]);

  const url = window.location.href;
  console.log(url);

  return (
    <section>
      <div className={`container ${styles.table}`}>
        <h2>My Wish List</h2>
        {wishListItems.length === 0 ? (
          <>
            <p>Your wish list is currently empty.</p>
            <br />
            <div>
              <Link to="/#products">&larr; Continue shopping</Link>
            </div>
          </>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {wishListItems.map((wishList, index) => {
                  const { id, name, price, imageURL } = wishList;
                  return (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>
                        <p>
                          <b>{name}</b>
                        </p>
                        <img
                          src={imageURL}
                          alt={name}
                          style={{ width: "100px" }}
                        />
                      </td>
                      <td>{price}</td>

                      <td className={styles.icons}>
                        <button
                          className="--btn --btn-danger"
                          onClick={() => addToCart(wishList)}
                        >
                          Add To Cart
                        </button>
                        <br />
                        <button
                          className="--btn --btn-danger"
                          onClick={() => removeFromWishList(wishList)}
                        >
                          Remove from Wishlist
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className={styles.summary}>
              <button className="--btn --btn-danger" onClick={clearWishList}>
                Clear Wish list
              </button>
              <div className={styles.checkout}>
                <div>
                  <Link to="/#products">&larr; Continue shopping</Link>
                </div>
                <br />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default WishList;
