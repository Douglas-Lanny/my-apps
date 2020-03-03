import React from 'react'
import '../App.css'




export const Foto = (props) => {
    return (
        <div className="prj-imagen">
            <div>
                <img alt="" />
                <span>{props.nombre_imagen}</span>
            </div>
        </div>
    );
}

export function Comentario(props){
    return (
        <div>
            <Foto nombre_imagen="Mi fotico"/>
            <label>Nombre del comentario{props.nombre}</label>
            <input />
            <button>Enviar</button>
        </div>
    );
}

export const InformacionPersona = (props) =>{
    return (
        <div>
            <label>
                Nombre {props.nombre}
            </label>
            <label>
                Correo {props.correo}
            </label>
            <img alt="" src={props.imagen}/>
        </div>
    )
}

export function Componente1(props){

     return (
         <div className="buscar-elemento">
             <div className="alert">
             <label>Pokemon</label>
             </div>
             <div>
             <button className="btn btn-primary" onClick={props.myFunction}>{props.nombre} </button>
             </div>
             
                
         </div>
     );
}

export function Componente2(props) {
    return (
        <div className="alert">
            <label>{props.mensaje}</label>
            <ul className="list-group">
                {
                    props.respuesta.map(
                        (item,i) => {
                        return (
                        <li className="list-group-item">{item.name}</li>)}
                    )
                }
            </ul>
        </div>
    );
}