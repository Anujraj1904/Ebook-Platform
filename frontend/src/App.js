import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import FlashSales from "./component/FlashSale/FlashSale";
import Category from "./component/Category/Category";
import AdsBox from "./component/AdsBox/AdsBox";
import ProductList from "./component/ExploreProduct/ProductList";
import BookCollection from "./component/BookCollection/BookCollection";
import BookList from "./component/Footer/bookList/bookList";
import Footer from "./component/FooterSection/footer";
import { AuthProvider } from "./store/auth";
import HeartPage from "./heartPage";
import CartBoxPage from "./cartBoxPage";
import Signup from "./signup";
import Login from "./login";
import { Logout } from "./logout";
import products from "./component/FlashSale/FlashData";
import ExpProducts from "./component/ExploreProduct/ExploreData";

const App = () => {
  const [productId, setProductId] = useState("");
  const [wishListProductId, setWishListProductId] = useState("");
  const [cartAllProduct, setCartAllProduct] = useState([]);
  const [wishListAllProduct, setWishListAllProduct] = useState([]);

  useEffect(() => {
    const filterdObject = products.filter((product) => product.id == productId);
    const filterdObjectExpD = ExpProducts.filter(
      (product) => product.id == productId
    );

    const combinedFilteredObjects = [...filterdObject, ...filterdObjectExpD].map(product => ({
      ...product,
      count: 1 // Initialize count property
    }));

    if (combinedFilteredObjects.length > 0) {
      setCartAllProduct((prevCart) => {
        // Check if the product is already in the cart
        const isProductInCart = prevCart.some(
          (product) => product.id == productId
        );
        if (!isProductInCart) {
          return [...prevCart, ...combinedFilteredObjects];
        }
        return prevCart;
      });
    }
  }, [productId]);

  useEffect(() => {
    const filterdObject = products.filter((product) => product.id == wishListProductId);
    const filterdObjectExpD = ExpProducts.filter(
      (product) => product.id == wishListProductId
    );

    const combinedFilteredObjects = [...filterdObject, ...filterdObjectExpD];

    if (combinedFilteredObjects.length > 0) {
      setWishListAllProduct((prevWishList) => {
        // Check if the product is already in the wish list
        const isProductInWishList = prevWishList.some(
          (product) => product.id == wishListProductId
        );
        if (!isProductInWishList) {
          return [...prevWishList, ...combinedFilteredObjects];
        }
        return prevWishList;
      });
    }
  }, [wishListProductId]);

  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Header cartAllProduct={cartAllProduct} wishListAllProduct={wishListAllProduct} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomePage />
                  <FlashSales setProductId={setProductId} setWishListProductId={setWishListProductId} />
                  <Category />
                  <BookList />
                  <AdsBox />
                  <ProductList setProductId={setProductId} setWishListProductId={setWishListProductId} />
                  <BookCollection />
                  <Footer />
                </>
              }
            />
            <Route path="/heartPage" 
                    element={
                    <HeartPage
                    wishListAllProduct={wishListAllProduct}
                  setWishListAllProduct={setWishListAllProduct}
                   />} />
            <Route
              path="/cartBoxPage"
              element={
                <CartBoxPage
                  cartAllProduct={cartAllProduct}
                  setCartAllProduct={setCartAllProduct}
                />
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
