import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookDetails extends Component {

    constructor() {
        super();

        this.state = {
            hasDataLoaded: false,
            book: [],
            author: [],
            error: ""
        }
    }

    getBookDetails() {
        const { id } = this.props.match.params;

        fetch('../../../data/books.json')
            .then(response => response.json())
            .then(json => {
                let bookItem = json.books.find(book => book.id === parseInt(id));

                this.setState({
                    hasDataLoaded: true,
                    book: bookItem
                }, () => {
                    this.getAuthor(bookItem.authorId)
                });
            })
            .catch(error => {
                this.setState({
                    hasDataLoaded: true,
                    error: error.message
                });
            });
    }

    getAuthor = id => {
        fetch('../../../data/authors.json')
            .then(response => response.json())
            .then(json => {
                let item = json.authors.find(author => author.id === parseInt(id));

                this.setState({
                    hasDataLoaded: true,
                    author: item.name
                });
            })
            .catch(e => {
                this.setState({
                    hasDataLoaded: true,
                    error: e.message
                });
            });
    }

    componentDidMount() {
        setTimeout(() => {
            this.getBookDetails()
        }, 500);
    }

    render() {

        const {book, hasDataLoaded, error, author} = this.state;
        
        if (!hasDataLoaded) {
            return "Loading..."
        }

        if (error.length > 0) {
            return "Error in retrieving details.";
        }

        return (
            <div>
                <button onClick={() => this.props.history.goBack()}>Go Back</button>
                <p className="is-text-6">Viewing current book:</p>
                <h1 className="title">Title: { book.title }</h1>
                <p className="subtitle">Author: <Link to={`/authordetails/${book.authorId}`}>{ author }</Link></p>
                <hr/>
                <p>Summary: </p>
                <p>{ book.summary }</p>
            </div>
        )
    }
}

export default BookDetails;