import React, { Component } from 'react'
import FilterPanel from "./../components/FilterPanel"
import ProductThumbnail from "./../components/ProductThumbnail"

class Products extends Component {
    state = {
        selectedFilters: [],
    };

    getFilteredProducts() {
        let filteredProducts = this.props.allProducts;

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

    updateFilters = (filters) => {
        this.setState({ selectedFilters: filters});
        // console.log(this.getFilteredProducts());
    };

    componentDidMount() {
        this.setState({ selectedFilters: this.props.allFilters });
    };

    render() {
        return (
            <div>
                <FilterPanel filters={this.props.allFilters} filterIsUpdated={this.updateFilters}/>
                <div className="productCatalog">
                    <div className="productCatalog-inner">
                        { this.getFilteredProducts().map((product,index) =>
                            <ProductThumbnail product={product} key={index}/>
                        )}
                    </div>
                </div>
            </div>
        )
    };

    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    isNumberInRange(number, range) {
        const splitRange = range.split("-");
        const min = splitRange[0];
        const max = splitRange[1];
        return (number >= min && number <= max);
    }
}

export default Products