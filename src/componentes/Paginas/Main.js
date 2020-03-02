import React, {Component} from 'react'
import {Route, BrowserRouter as Router } from  'react-router-dom'
import Inicio from './Inicio'
import Register from './Register'
import Intergrupo from './Intergrupo'

const Navegacion =(

    <Router>
        <Route path="/Login" component={Inicio} />
        <Route path="/Registro" component={Register} />
        <Route path="/Intergrupo" component={Intergrupo} />
    </Router>
)


class Main extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="main-container">
                {
                    Navegacion
                }
            </div>
        )
    }


}

export default Main;