
import React, { Component } from 'react'



class Header extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">{this.props.nombre}</a>
            </nav>
        )
    }
}

export default Header;