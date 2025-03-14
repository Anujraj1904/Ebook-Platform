import React from 'react';
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import FlashSales from './component/FlashSale/FlashSale';
import Category from './component/Category/Category';
import AdsBox from './component/AdsBox/AdsBox';
import ProductList from './component/ExploreProduct/ProductList';
import BookCollection from './component/BookCollection/BookCollection';
import BookList from './component/Footer/bookList/bookList';
import Footer from './component/FooterSection/footer';

function App() {
  return (
   
    <div className='app'>
      <Header/>
      <HomePage/>
      <FlashSales/>
      <Category/>
      <BookList/>
      <AdsBox/>
     <ProductList/>
     <BookCollection/>
     <Footer/>
    </div>

  );
}

export default App;
