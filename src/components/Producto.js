import React from 'react';

function Producto(props){
    return(
        <React.Fragment>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td>{props.productCategory.name}</td>
                    <td>{<img style={{width:10+'rem'}} src={`http://localhost:3000/img/products/${props.image}`} alt={props.name} />}</td>
                </tr>
        </React.Fragment>
    )
}
export default Producto;