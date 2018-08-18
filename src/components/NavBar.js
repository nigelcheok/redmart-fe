import React, { Component } from 'react'
import Logo from '../images/redmart_logo.png'
import { Link } from 'react-router-dom'

class NavBar extends Component {

    // state = {
    //     query: '',
    //     searchResult: [],
    // };
    //
    // hasClickedOnPlace = (location) => {
    //     this.props.showClickedLocation(location);
    // };
    //
    // showFilteredLocations = (searchResult) => {
    //     this.props.showFilteredLocations(searchResult);
    // };

    componentDidMount() {
    }

    render() {
        return (
            <div className="navbar dark-blue">
                <Link to="/">
                    <img src={window.location.origin + Logo} className="logo" alt="logo"/>
                </Link>
                <Link to="/cart">
                    <div className="navbar-btn navbar-btn-cart white-text red">
                        <i className="fas fa-shopping-cart"/> Cart
                    </div>
                </Link>
            </div>
        )
    }
}

export default NavBar