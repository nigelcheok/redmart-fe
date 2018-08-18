import React, { Component } from 'react';
import './App.css';
import PRODUCTS_JSON from './data/products.json';
import NavBar from "./components/NavBar";
import FilterPanel from "./components/FilterPanel"
import ProductThumbnail from "./components/ProductThumbnail"

class App extends Component {
  state = {
    allProducts: PRODUCTS_JSON.products,
    allFilters: PRODUCTS_JSON.filters,
    selectedFilters: [],
  };

  updateFilters = (filters) => {
      this.setState({ selectedFilters: filters});
      console.log(this.getFilteredProducts());
  };

  getFilteredProducts() {
      let filteredProducts = this.state.allProducts;

      for (const [index, cat] of this.state.selectedFilters.entries()) {
          let targetFilter = cat.name;
          let targetValues = cat.values;

          filteredProducts = filteredProducts.filter(product => {
              if (this.isNumeric(product[targetFilter])) { // check for price range
                  for (const targetValue of targetValues) {
                      if (this.isNumberInRange(product[targetFilter], targetValue)) return true;
                  }
                 return false;
              }
              else return (targetValues.includes(product[targetFilter]));
          });
      }

      return filteredProducts;
  }

   isNumeric(n) {
       return !isNaN(parseFloat(n)) && isFinite(n);
   }

   isNumberInRange(number, range) {
      const splitRange = range.split("-");
      const min = splitRange[0];
      const max = splitRange[1];
      return (number >= min && number <= max);
   }

   goToProductPage(product) {
      console.log(product);
   }

  componentDidMount() {
    console.log(PRODUCTS_JSON);
    this.setState({ selectedFilters: this.state.allFilters});

    console.log(this.getFilteredProducts());
  };

  render() {
    return (
      <div className="App">
        <NavBar/>
        <FilterPanel filters={this.state.allFilters} filterIsUpdated={this.updateFilters}/>
        <div className="productCatalog">
            <div className="productCatalog-inner">
                { this.getFilteredProducts().map((product,index) =>
                    <ProductThumbnail image={product.image} desc={product.desc} name={product.name} price={product.price} measurement={product.measurement} key={index} productIsClicked={this.goToProductPage}/>
                )}
            </div>
        </div>
      </div>
    );
  };
}

export default App;
