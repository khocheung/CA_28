import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class Navbar extends Component {

    render() {
        return ( <
            nav className = "navbar navbar-inverse bg-primary navbar-expand-sm navbar-dark px-sm-5" >

            <
            div className = "container-fluid" >
            <
            div className = "navbar-header" >
            <
            Link to = { "/" }
            className = "navbar-brand" > GMZ < /Link> <
            /div> <
            ul className = "nav navbar-nav" >
            <
            li className = "active nav-item ml-5" > < Link to = { "/" } > Home < /Link></li >
            <
            li className = "dropdown nav-item ml-5" >
            <
            Link to = { "#" }
            className = "dropdown-toggle"
            data - toggle = "dropdown" > Categories < span className = "caret" > < /span></Link >
            <
            ul className = "dropdown-menu" >
            <
            li > < Link to = { "/brand/apple" } > PC < /Link></li >
            <
            li > < Link to = { "/brand/google" } > Switch < /Link></li >
            <
            li > < Link to = { "/brand/samsung" } > Xbox < /Link></li >
            <
            li > < Link to = { "/brand/htc" } > Playstation < /Link></li >
            <
            li className = "divider" > < /li> <
            li > < Link to = { "/" } > All Categories < /Link></li >
            <
            /ul> <
            /li>

            <
            /ul> <
            ul className = "nav navbar-nav navbar-right" >
            <
            li className = "nav-item ml-5" >
            <
            Link to = { "/cart" }
            className = "ml-auto" > < span className = "badge pull-right" > { this.props.productNumber } < /span> <
            i className = "glyphicon glyphicon-shopping-cart" > < /i></Link > < /li>             <
            /ul> <
            /div> <
            /nav>
        )
    }
}

Navbar.propTypes = {
    productNumber: PropTypes.number
};

const mapStateToProps = state => {
    return ({
        productNumber: state.products.cart.length,
    });
}

export default connect(mapStateToProps)(Navbar);