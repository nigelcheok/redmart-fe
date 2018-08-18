import React, { Component } from 'react';
import './App.css';
import PRODUCTS_JSON from './data/products.json';
import NavBar from './components/NavBar';
import Products from './views/Products';
import Product from './views/Product';
import Cart from './views/Cart';
import { Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'

class App extends Component {
  state = {
    allProducts: PRODUCTS_JSON.products,
    allFilters: PRODUCTS_JSON.filters,
  };

  componentDidMount() {
    console.log(PRODUCTS_JSON);
  };

  render() {
    return (
      <div className="App">
        <NavBar/>
          <Route exact path='/' render={() => (
              <Products allProducts={this.state.allProducts} allFilters={this.state.allFilters}/>
          )}/>
          <Route exact path='/cart' render={() => (
              <Cart/>
          )}/>
          <Route path='/product' render={() => (
              <Product products={this.state.allProducts}/>
          )}/>
      </div>
    );
  };
}

export default App;
