import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = props => {
    const { book, author } = props;
    return (
        <li key={book.id} className="column is-one-quarter book-item">
            <div className="card has-background-grey-lighter">
                <div className="card-content">
                    <div className="content">
                        <Link to={`/bookdetails/${ book.id }`}>{ book.title }</Link>
                    </div>
                    <span className="is-size-7">
                        by: <Link to={`/authordetails/${ book.authorId }`}>{ author }</Link>
                    </span>
                </div>
            </div>
        </li>
    );
}

export default BookItem;