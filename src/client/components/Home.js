import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

class Home extends Component {

    constructor() {
        super()

        this.state = {
            name: "Marck",
            address: 'Makati',
            nickname: 'Marck',
            favorite: {
                author: "JK Rowling",
                book: "Harry Potter"
            }
        }
    }

    changeName(name) {
        this.setState({
            name: name
        })
    }

    changeInputName(event) {
        this.setState({
            name: event.target.value
        })
    }

    render() {

        const { name, favorite, ...rest } = this.state;

        return (
            <div>
                <div>
                    My name is {name}. I live in {rest.address}.
                </div>
                <div>
                    My favorite book is {favorite.book} by {favorite.author}.
                </div>
                <div>
                    Input new name: <input type="text" onChange={(e) => this.changeInputName(e)}/>
                </div>
                <div>
                    <button onClick={() => this.changeName("Ryan")}>Change Name to Ryan</button>   
                    <button onClick={this.changeName.bind(this, "Marck")}>Change Name to Marck</button> 
                </div>
                <div>
                    My favorite food is {this.props.food}.
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    food: PropTypes.string.isRequired
}

Home.defaultProps = {
    food: "adobo"
}

export default Home;