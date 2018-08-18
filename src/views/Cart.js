import React, { Component } from 'react'
import ProductThumbnail from "./../components/ProductThumbnail"

class Cart extends Component {
    state = {
        productsInCart: []
    };

    updateCart() {
        if (localStorage.getItem('cart')) {
            this.setState({ productsInCart: JSON.parse(localStorage.getItem('cart'))});
        }
    }

    buttonIsClicked() {
        //update cart
    }

    componentDidMount() {
        this.updateCart();
    };

    render() {
        return (
            <div className="cartDetails">
                    <div className="productCatalog-inner">
                        { this.state.productsInCart.map((product,index) =>
                            <ProductThumbnail product={product} key={index} onClick={this.buttonIsClicked}/>
                        )}
                    </div>
            </div>
        )
    };
}

export default Cart