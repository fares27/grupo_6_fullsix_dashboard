import React, { useState, useEffect } from "react";
import TarjetaTotalUsuarios from './TarjetaTotalUsuarios';


function TotalUsuario(){

    // declarar el estado inicial del componente
    const [usuarios, setUsuarios] = useState([]);

    // Trabajar con el ciclo de vida del componente

    useEffect(() => {
        fetch("http://localhost:3000/api/users")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsuarios(data.metadata)
            })
    }, [])

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        
        {
            <TarjetaTotalUsuarios {...usuarios} key={usuarios}/>
        }

        </React.Fragment>
    )
}
export default TotalUsuario;