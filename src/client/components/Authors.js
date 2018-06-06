import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';


class Authors extends Component {
    constructor() {
        super();

        this.state = {
            hasDataLoaded: false,
            authors: [],
            error: ""
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.getAuthors();
        }, 500);
    }

    getAuthors = () => {
        axios
            .get('../../../data/authors.json')
            .then(authors => {

                this.setState({
                    hasDataLoaded: true,
                    authors: authors.data.authors
                });
            })
            .catch(error => {
                this.setState({
                    authorsHasLoaded: true,
                    error: error.message
                });
            });
    }

    render() {
        const {authors, hasDataLoaded, error} = this.state;
        
        if (!hasDataLoaded) {
            return "Loading authors still in progress."
        }

        if (error.length !== 0) {
            return `Error in retrieving details. Error message: ${error}`;
        }

        return (
            <div>
                <h1 style={{fontWeight:'bold'}}>AUTHORS</h1>

                <ul className="book-list columns is-multiline">
                    {
                        authors.map(author => {
                            return (
                                <li key={author.id} className="column is-one-quarter book-item">
                                    <div className="card has-background-grey-lighter">
                                        <div className="card-content">
                                            <div className="content">
                                                <Link to={`/authordetails/${author.id}`}>{author.name}</Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }

}

export default Authors;