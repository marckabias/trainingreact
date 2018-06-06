import React, { Component, createContext } from 'react';

const UserContext = createContext();

export class Provider extends Component {
    constructor () {
        super();
        this.state = {
            loggedUserName: null
        }
    }

    login = name => {
        return (
            this.setState({
                loggedUserName: 'Paul'
            })
        );
    }

    logout = () => {
        return (
            this.setState({
                loggedUserName: null
            })
        );
    }

    render () {
        return (
            <UserContext.Provider value={{
                user: this.state.loggedUserName,
                actions: {
                    login: this.login,
                    logout: this.logout
                }
            }}>
                { this.props.children }
            </UserContext.Provider>
        );
    }
}

export const Consumer = UserContext.Consumer;