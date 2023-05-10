import React from 'react';

function DetalleUltimoProducto(props){
    return(
        <React.Fragment>
            <div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width:10+'rem'}} src={`http://localhost:3000/img/products/${props.image}`} alt={props.name}/>
									</div>
									<h1>{props.name}</h1>
									<p>{props.description}</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Detalle</a>
								</div>
        </React.Fragment>
    )
}
export default DetalleUltimoProducto;