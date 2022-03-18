import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products-list'>
          <ProductList />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/single-product'>
          <SingleProduct />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;