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
             <label>Componente 1</label>
                <button onClick={props.myFunction}>{props.nombre} </button>
         </div>
     );
}

export function Componente2(props) {
    return (
        <div className="alert">
            <label>{props.mensaje}</label>
            <label></label>
        </div>
    );
}