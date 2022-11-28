import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Admin from "../pages/admin/Admin";
import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";

function RoutesPath() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default RoutesPath;
