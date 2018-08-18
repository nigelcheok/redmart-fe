import React, { Component } from 'react'

class Product extends Component {
    state = {
        product: null,
    };

    getProduct() {
        const productUrlName = window.location.pathname.split('/')[2];
        // console.log(this.props.products);
        let product = this.props.products.filter(product => (this.mapProductNameToUrlName(product) === productUrlName));
        if (product.length) return product[0];
        else return null;
    };

    addToCart() {
        if (localStorage.getItem('cart')) {
            const productsInCart = JSON.parse(localStorage.getItem('cart'));
            productsInCart.push(this.getProduct());
            localStorage.setItem('cart', JSON.stringify(productsInCart));
        }
        else localStorage.setItem('cart', JSON.stringify([this.getProduct()]));
    }

    componentDidMount() {
        this.setState({ product: this.getProduct() });
    };

    render() {
        return (
            <div className="productDetailSection">
                <div className="productDetail">
                { this.state.product && (
                    <div>
                        <div className="productDetail-title"> { this.state.product.name } </div>
                        <br/><br/><br/><br/>
                        <div className="productDetail-container">
                            <div>
                                <img src={ require(`../images/products/${this.state.product.image}`) } width="400" className="productThumbnail-image" alt={this.props.desc}/>
                            </div>
                            <div className="productDetail-info">
                                { this.state.product.measurement }
                                <div className="productDetail-spacer"/>
                                <b> { '$' + this.state.product.price } </b>
                                <div className="productDetail-spacer"/>
                                <div className="productDetail-info-desc">{ this.state.product.desc }</div>
                                <div className="productDetail-spacer"/><br/>
                                <div className="productDetail-cartbtn brown white-text float-left" onClick={ this.addToCart() }>Add to Cart</div>
                            </div>
                        </div>
                    </div>
                )}
                {!this.state.product && (
                    <div className="productDetail-title">Sorry, we cannot find the product that you're looking for.</div>
                )}
                </div>
            </div>
        )
    };

    mapProductNameToUrlName(product) {
        return product.name.toLowerCase().replace(/-/g, '').replace(/ /g, '-')
    }
}

export default Product