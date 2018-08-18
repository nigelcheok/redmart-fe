import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProductThumbnail extends Component {
    // props: image, name, price

    state = {
    };

    componentDidMount() {
        console.log(this.props.product)
    };

    getProductUrl() {
        return this.props.product.name.toLowerCase().replace(/-/g, '').replace(/ /g, '-');
    }

    addToCart = () => {
        if (localStorage.getItem('cart')) {
            const productsInCart = JSON.parse(localStorage.getItem('cart'));
            productsInCart.push(this.props.product);
            localStorage.setItem('cart', JSON.stringify(productsInCart));
        }
        else localStorage.setItem('cart', JSON.stringify([this.props.product]));
        this.props.onClick('added');
    };

    render() {
        return (
                <div className="productThumbnail">
                    <Link to={'product/' + this.getProductUrl()} className="noTextUnderline">
                    <img src={ require(`../images/products/${this.props.product.image}`) } width="300" className="productThumbnail-image" alt={this.props.product.desc}/>
                    <div className="productThumbnail-desc">
                         <div className="productThumbnail-spacer"/>
                         { this.props.product.name }
                         <div className="productThumbnail-spacer"/>
                         { this.props.product.measurement }
                         <div className="productThumbnail-spacer"/>
                        <b>${ this.props.product.price }</b>
                    </div>
                    </Link>
                    <br/><br/><br/>
                    <div className="productThumbnail-btn brown white-text" onClick={ this.addToCart }>Add to Cart</div>
                </div>
        )
    };
}

export default ProductThumbnail