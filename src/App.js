import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Product from './component/Product/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import OrderReview from './component/OrderReview/OrderReview';
import UpComing from './component/Navbar/UpComing/UpComing';
import NotFound from './component/NotFound/NotFound';
import ProductDtls from './component/ProductDtls/ProductDtls';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Router>
        <Switch>

          <Route exact path="/product">
            <Product></Product>
          </Route>

          <Route exact path="/OrderReview">
            <OrderReview></OrderReview>
          </Route>

          <Route exact path="/UpComing">
            <UpComing></UpComing>
          </Route>

          <Route exact path="/product/:productKey">
            <ProductDtls></ProductDtls>
          </Route>

          <Route exact path="/">
            <Product></Product>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div >
  );
}

export default App;
