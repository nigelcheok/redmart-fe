import React, { Component } from 'react'
import Logo from '../images/redmart_logo.png'

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
                <img src={window.location.origin + Logo} className="logo" alt="logo"/>
                <div className="navbar-btn navbar-btn-cart white-text red">
                    <i className="fas fa-shopping-cart"/> Cart
                </div>
            </div>
        )
    }
}

export default NavBar