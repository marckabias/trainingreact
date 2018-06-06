import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect} from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import Books from '../components/Books';
import BookDetails from '../components/BookDetails';
import Authors from '../components/Authors';
import AuthorDetails from '../components/AuthorDetails';
import NoMatch from '../components/NoMatch';

class Main extends Component {
    render() {
        return (
            <div id="main" className="section has-background-white">
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route path="/home" exact render={() => <Home />} />
                    <Route path="/books" exact render={() => <Books />} />
                    <Route path="/bookdetails/:id" exact component={BookDetails} />
                    <Route path="/authors" exact render={() => <Authors />} />
                    <Route path="/authordetails/:id" exact component={AuthorDetails} />
                    <Route path="/about" exact component={About} />
                    <Route render={() => <NoMatch />} />
                </Switch >
            </div>
        )
    }
}

export default Main;