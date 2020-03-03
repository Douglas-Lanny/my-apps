import React, {Component} from  'react';
import {Componente1, Componente2} from '../componentes-funcionales';
import Api from 'axios';


export class Intergrupo extends Component {

    constructor(props){
        super(props);
        this.state = {
            nombre: 'comienzo',
            mensaje:'',
            res: []
        }

        this.consumirApi = this.consumirApi.bind(this);
    }

    async consumirApi (){
        try{
            var respuesta = await Api.get("https://pokeapi.co/api/v2/pokemon");
        this.setState({mensaje: 'consumo exitos', res : [...respuesta.data.results]});
        
        }catch(error){
            this.setState({mensaje: 'consumo fallo'})
        }
    }


    render(){

       return (
           <div className="container" >
                <Componente1 nombre={this.state.nombre} myFunction={this.consumirApi} />
               <Componente2 mensaje={this.state.mensaje} respuesta = {this.state.res}/>
           </div>
        );

    }
}

export default Intergrupo;