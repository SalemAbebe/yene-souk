import { useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <img src={logoImg} alt="yene-souk" className="logo" />
    </Link>
  </div>
);

const cart = (
  <span className={styles.links}>
    <Link to="/cart">
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };
  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <Link to="/login"> Login</Link>
              <Link to="/register"> Register</Link>
              <Link to="/order-history"> My Orders</Link>
            </span>
            {cart}
            <HiOutlineMenuAlt3 size={30} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
