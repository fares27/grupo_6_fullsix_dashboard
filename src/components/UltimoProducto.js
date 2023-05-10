import React, { useState, useEffect } from "react";
import DetalleUltimoProducto from './DetalleUltimoProducto';

function UltimoProducto() {

    // declarar el estado inicial del componente
    const [producto, setProducto] = useState([]);

    // Trabajar con el ciclo de vida del componente

    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProducto(data.metadata.lastProduct)
            })
    }, [])

    return (
        <React.Fragment>
                        
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800"><center>Último Producto Cargado</center></h5>
								</div>
                                {
                                <DetalleUltimoProducto {...producto} key={producto}/>
                                }
							</div>
						</div>

        </React.Fragment>
    )
}


export default UltimoProducto;