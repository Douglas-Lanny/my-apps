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