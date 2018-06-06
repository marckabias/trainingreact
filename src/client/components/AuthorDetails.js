import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class AuthorDetails extends Component {

    constructor() {
        super()

        this.state = {
            booksHasLoaded: false,
            authorsHasLoaded: false,
            books: [],
            author: [],
            error: ""
        }
    }

    getData = () => {
        const { id } = this.props.match.params;

        const getBooks = () => axios.get('../../../data/books.json');
        const getAuthors = () => axios.get('../../../data/authors.json');

        axios
            .all([getBooks(), getAuthors()])
            .then(axios.spread((res1, res2) => {
                let currentAuthor = res2.data.authors.find(author => author.id === parseInt(id));
                let currentBooks = res1.data.books.filter(book =>
                    parseInt(book.authorId) === currentAuthor.id);

                this.setState({
                    booksHasLoaded: true,
                    authorsHasLoaded: true,
                    books: currentBooks,
                    author: currentAuthor
                });
            }))
            .catch(error => {
                this.setState({
                    authorsHasLoaded: true,
                    error: error.message
                });
            });
    }

    componentDidMount() {
        setTimeout(() => {
            this.getData();
        }, 500);
    }

    render() {
        const {books, booksHasLoaded, authorsHasLoaded, author, error} = this.state;

        if (!booksHasLoaded || !authorsHasLoaded) {
            return "Loading author details in progress..."
        }

        if (error.length !== 0) {
            return `Error in retrieving details. Error message: error`;
        }

        return (
            <div>
                <p className="is-text-6">Viewing current author:</p>
                <h1 className="title">{ author.name }</h1>
                <hr/>
                <p className="subtitle">List of books written: </p>
                <ul className="book-list">
                    {
                        books.map(book => {
                            return (
                                <li key={book.id}>
                                    <div className="">
                                        <Link to={`/bookdetails/${book.id}`}>{book.title}</Link>
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

export default AuthorDetails;