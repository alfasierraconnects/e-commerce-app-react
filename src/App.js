import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import AddressPage from "./pages/AddressPage";
import Orders from "./pages/Orders";
import OrderInformation from "./pages/OrderInformation";
import Footer from "./components/Footer";
import men_banner from "./Assets/banner_mens.png";
import women_banner from "./Assets/banner_women.png";
import kids_banner from "./Assets/banner_kids.png";
import Checkout from "./pages/Checkout";
import PrivateRoutes from "./context/PrivateRoutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory category="men" banner={men_banner} />}
          />
          <Route
            path="/women"
            element={<ShopCategory category="women" banner={women_banner} />}
          />
          <Route
            path="/kids"
            element={<ShopCategory category="kids" banner={kids_banner} />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/address" element={<AddressPage />} />
          </Route>
          <Route path="/orders" element={<Orders />} />
          <Route path="/orderinfo" element={<OrderInformation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
