// code Here
import React from 'react'

function List(props) {
    return (
        <div>            
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default List