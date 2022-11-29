import React from "react";
import styles from "./Auth.module.scss";
import reset from "../../assets/images/reset.png";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";

const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={reset} alt="reset password" width="400" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Reset Password</h2>
          <form>
            <input type="text" placeholder="Email" required />

            <button className="--btn --btn-primary --btn-block">
              Reset Password
            </button>
            <div className="styles.links">
              <p>
                <Link to="/login">Login</Link>
              </p>
              <p>
                <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Login;
