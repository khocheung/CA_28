import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style/Categories.css'
import PropTypes from 'prop-types';

export default class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSearchInputChange = this.onSearchInputChange.bind(this);
    };


    handleSubmit = (e) => {

        e.preventDefault();
        if (this.state.searchValue !== '') {
            this.props.p.history.push('/brand/' + this.state.searchValue)
        }
    }

    onSearchInputChange = (e) => {
        const searchValue = e.target.value;
        console.log(searchValue)
        this.setState({
            searchValue
        });

    };


    render() {
        const { category } = this.props

        return ( <
            div >
            <
            div className = "categories-container" >
            <
            h2 > Categories < /h2> <
            div class = "list-group" >
            <
            Link to = { "/" }
            className = {
                (category === 'All') ? ("list-group-item active") : ("list-group-item") } > All < /Link> <
            Link to = { "/brand/pc" }
            className = {
                (category === 'pc') ? ("list-group-item active") : ("list-group-item") } > PC < /Link>    <
            Link to = { "/brand/switch" }
            className = {
                (category === 'switch') ? ("list-group-item active") : ("list-group-item") } > Switch < /Link> <
            Link to = { "/brand/xbox" }
            className = {
                (category === 'xbox') ? ("list-group-item active") : ("list-group-item") } > Xbox < /Link> <
            Link to = { "/brand/playstation" }
            className = {
                (category === 'playstation') ? ("list-group-item active") : ("list-group-item") } > Playstation < /Link> <
            /div> <
            /div>

            <
            div className = "well blosd" >
            <
            h3 className = "lead" >
            Quick Shop <
            /h3> <
            div className = "input-group" >
            <
            form onSubmit = { this.handleSubmit } >
            <
            input type = "text"
            className = "form-control"
            value = { this.state.searchValue }
            onChange = { this.onSearchInputChange }
            /> <
            /form> <
            span className = "input-group-btn"
            onClick = { this.handleSubmit } >
            <
            button className = "btn btn-default" >
            <
            span className = "glyphicon glyphicon-search" / >
            <
            /button> <
            /span> <
            /div> <
            /div> <
            /div>
        )
    }
}


Categories.propTypes = {
    category: PropTypes.string
}