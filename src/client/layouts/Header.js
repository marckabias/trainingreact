import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

const styles = {
        activeLink: {
            color: '#ffffff',
            fontWeight: 'bold'
        },
        navLink: {
            float: 'left',
            width: '90px',
            color: '#ffffff',
            fontWeight: 'regular' 
        }
}

class Header extends Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <div id="header" className="section has-background-grey-dark">
                <h1 className="title has-text-black">The Book List</h1>
                <p className="subtitle"></p>
                <div>
                    <nav>
                        <ul className="list--unstyled">
                            <li style={styles.navLink}><NavLink to={{
                                pathname: '/home',
                                search: '?sort=name',
                                hash: '#about'
                            }} activeClassName="is-active" exact strict activeStyle={styles.activeLink}>Home</NavLink></li>
                            <li style={styles.navLink}><NavLink to="/books" activeClassName="is-active" activeStyle={styles.activeLink}>Books</NavLink></li>
                            <li style={styles.navLink}><NavLink to="/authors" activeClassName="is-active" activeStyle={styles.activeLink}>Authors</NavLink></li>
                            <li style={styles.navLink}><NavLink to="/about" activeClassName="is-active" activeStyle={styles.activeLink}>About</NavLink></li>
                        </ul>  
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header;