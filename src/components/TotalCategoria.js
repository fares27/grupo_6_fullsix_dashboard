import React, { useState, useEffect } from "react";
import TarjetaTotalCategorias from './TarjetaTotalCategorias';

function TotalCategoria(){

    // declarar el estado inicial del componente
    const [categorias, setCategorias] = useState([]);

    // Trabajar con el ciclo de vida del componente

    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCategorias(data.metadata)
            })
    }, [])

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        
        {
            <TarjetaTotalCategorias {...categorias} key={categorias}/>
        }

        </React.Fragment>
    )
}
export default TotalCategoria;