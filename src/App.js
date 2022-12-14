import "./App.scss";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Admin from "./pages/admin/Admin";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProductDetails from "./components/product/productDetails/ProductDetails";
import Reset from "./pages/auth/Reset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutDetails from "./pages/checkout/CheckoutDetails";
import Checkout from "./pages/checkout/Checkout";
import CheckoutSuccess from "./pages/checkout/CheckoutSuccess";
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
import OrderHistory from "./pages/orderHistory/OrderHistory";
import WishList from "./pages/wishList/WishList";
// import OrderDetails from "./pages/orderDetails/OrderDetails";
// import ReviewProducts from "./components/reviewProducts/ReviewProducts";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />

          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                <Admin />
              </AdminOnlyRoute>
            }
          />

          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout-details" element={<CheckoutDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          {/* <Route path="/order-history" element={<OrderHistory />} /> */}
          {/* <Route path="/order-details/:id" element={<OrderDetails />} />
          <Route path="/review-product/:id" element={<ReviewProducts />} />
          <Route path="*" element={<NotFound />} /> */}
          <Route path="/wishList" element={<WishList />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
