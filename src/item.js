import React from 'react'

export function Item(props){
    return (
        <div>
            <label>Nuevo item con id{props.idItem}</label>
            <button className="btn btn-success">Search</button>
        </div>
    )
}

export const Item2 = (props) =>{
    return (<label>Nuevo Item 2</label>)
}
export default Item;