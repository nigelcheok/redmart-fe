import React, { Component } from 'react'

class ProductThumbnail extends Component {
    // props: image, name, price

    state = {

    };

    componentDidMount() {

    };

    productIsClicked = (productName) => {
        this.props.productIsClicked(productName);
    };

    render() {
        return (
            <div className="productThumbnail" onClick={this.productIsClicked.bind(this, this.props.name)}>
                <img src={ require(`../images/products/${this.props.image}`) } width="300" className="productThumbnail-image" alt={this.props.desc}/>
                <div className="productThumbnail-desc">
                     <div className="productThumbnail-spacer"/>
                     { this.props.name }
                     <div className="productThumbnail-spacer"/>
                     { this.props.measurement }
                     <div className="productThumbnail-spacer"/>
                     <b>${ this.props.price }</b>
                </div>
                <br/><br/><br/>
                <div className="productThumbnail-btn brown white-text">Add to cart</div>
            </div>
        )
    };
}

export default ProductThumbnail