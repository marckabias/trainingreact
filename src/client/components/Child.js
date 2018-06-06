import React, { Component } from 'react'
import SubChild from './SubChild'

const Child = props => {
    console.log(props)
    return (
        <div>
            I'm { props.name} and my wife is {props.namegirl}. Her favorite book is {props.book.name} by {props.book.author}.
            <hr/>
            <SubChild />
        </div>
    )
}

export default Child