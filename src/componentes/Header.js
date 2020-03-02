import React, { Component } from 'react'
class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">{this.props.nombre }</a>
                <a href="/Login" className="item-menu" > Iniciar Session</a>
                <a href="/Registro" className="item-menu" >Registrar</a>
                <a href="/Intergrupo" className="item-menu">Intergrupo</a>
            </nav>
        )
    }
}

export default Header;