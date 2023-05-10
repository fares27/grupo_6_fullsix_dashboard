import React, { useState, useEffect } from "react";
import TarjetaTotalProductos from './TarjetaTotalProductos';

function TotalProducto(){

    // declarar el estado inicial del componente
    const [productos, setProductos] = useState([]);

    // Trabajar con el ciclo de vida del componente

    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProductos(data.metadata)
            })
    }, [])

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        
        {
            <TarjetaTotalProductos {...productos} key={productos}/>
        }

        </React.Fragment>
    )
}
export default TotalProducto;