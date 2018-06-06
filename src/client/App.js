import React, { Component } from 'react';

import Child from './components/Child';
import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { HashRouter } from 'react-router-dom';


const favebook = {
    name : "Book 1",
    author : "Anna Smith"
}

export default class App extends Component {

    constructor() {
        super()

        this.state = {
            button: "yellow",
            song: {
                name: "Happy birthday song",
                singer: "Janna Smith"
            },
            food: "burger"
        }
    }
    render() {

        setTimeout(() => {
            this.setState({
                button: "green",
                song: {
                    ...this.state.song,
                    name: "Silent Night"
                }
            })
        }, 2000)

        return (
            <HashRouter>
                <div>
                    <Header />
                    <ErrorBoundary><Main /></ErrorBoundary>
                    <Footer />
                </div>
            </HashRouter>
            
        )
    }
}

//<div>
//She is {this.props.namegirl} <br/>
//This is App component. <br/>
//<Child name="John" namegirl={this.props.namegirl} book={favebook} /><br/>
//Her favorite song is {this.state.song.name} by {this.state.song.singer}<br/>

//<button style={{backgroundColor: this.state.button}}>LOGIN</button>
//</div>