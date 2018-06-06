import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import BookItem from './BookItem';

class Books extends Component {
    constructor() {
        super()

        this.state = {
            booksHasLoaded: false,
            authorsHasLoaded: false,
            books: [],
            authors: [],
            error: ""
        }
    }

    getData = () => {
        const getBooks = () => axios.get('../../../data/books.json');
        const getAuthors = () => axios.get('../../../data/authors.json');

        axios
            .all([getBooks(), getAuthors()])
            .then(axios.spread((books, authors) => {

                this.setState({
                    booksHasLoaded: true,
                    authorsHasLoaded: true,
                    books: books.data.books,
                    authors: authors.data.authors
                });
            }))
            .catch(error => {
                this.setState({
                    authorsHasLoaded: true,
                    error: error.message
                });
            });
    }

    // getBooks = () => {
    //     fetch('../../../data/books.json')
    //         .then(response => response.json())
    //         .then(json => {
    //             this.setState({
    //                 booksHasLoaded: true,
    //                 books: json
    //             });
    //         })
    //         .catch(e => {
    //             this.setState({
    //                 booksHasLoaded: true,
    //                 error: e.message
    //             });
    //         });
    // }

    // getAuthors = () => {
    //     fetch('../../../data/authors.json')
    //         .then(response => response.json())
    //         .then(json => {
    //             let list = json.authors;

    //             this.setState({
    //                 authorsHasLoaded: true,
    //                 authors: list
    //             });
    //         })
    //         .catch(e => {
    //             this.setState({
    //                 authorsHasLoaded: true,
    //                 error: e.message
    //             });
    //         });
    // }

    getAuthorName = id => {
        const { authors } = this.state;
        const author = this.state.authors.find(author => author.id === parseInt(id));
        return author.name;
    }

    componentDidMount() {
        setTimeout(() => {
            this.getData();
            // this.getBooks();
            // this.getAuthors();
        }, 500);
    }

    render() {
        const {books, booksHasLoaded, authorsHasLoaded, error} = this.state;

        if (!booksHasLoaded || !authorsHasLoaded) {
            return "Loading books still in progress."
        }

        if (error.length !== 0) {
            return `Error in retrieving details. Error message: error`;
        }

        return (
            <div>
                <h1 style={{fontWeight:'bold'}}>TOP BOOKS</h1>

                <ul className="book-list columns is-multiline">
                    {
                        books.map(book => {
                            return (
                                <BookItem
                                    key={ book.id }
                                    book={ book }
                                    author={ this.getAuthorName(book.authorId) }
                                />
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Books;