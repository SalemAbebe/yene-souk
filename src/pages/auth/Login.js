import React, { useState } from "react";
import styles from "./Auth.module.scss";
// import login from "../../assets/images/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { Card } from "@mui/material";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";

import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { GET_CART_DATA, selectPreviousURL } from "../../redux/slice/cartSlice";
import { GET_WISHLIST_DATA } from "../../redux/slice/wishListSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const previousURL = useSelector(selectPreviousURL);
  const dispatch = useDispatch();
  const redirectUser = () => {
    if (previousURL.includes("cart")) {
      return navigate("/cart");
    }
    navigate("/");
  };

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(GET_CART_DATA());
        dispatch(GET_WISHLIST_DATA());
        setIsLoading(false);
        toast.success("Login Successful...");
        redirectUser();
        // ...
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  // Login with Google
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successful");
        navigate("/");
        // ...
      })
      .catch((error) => {
        toast.error(error.message);
        // ...
      });
  };

  return (
    <>
      {isLoading && <Loader />}

      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img
            src={require("../../assets/images/login.jpg")}
            alt="Login"
            width="400"
          />
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Login</h2>
            <form onSubmit={loginUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Login
              </button>
              <div className="styles.links">
                <Link to="/reset">Reset Password</Link>
              </div>
              <p>-- or --</p>
            </form>
            <button
              onClick={signInWithGoogle}
              className="--btn --btn-danger --btn-block"
            >
              <FaGoogle color="#fff" />
              Login with Google
            </button>
            <span>Don't have account?</span>
            <Link to="/register">Register</Link>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Login;
