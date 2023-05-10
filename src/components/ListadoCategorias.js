import React, { useState, useEffect } from "react";
import Categoria from './Categoria';

function ListadoCategorias() {

    // declarar el estado inicial del componente
    const [categorias, setCategorias] = useState([]);

    // Trabajar con el ciclo de vida del componente

    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then(response => {
                return response.json()
            })
            .then(data => {
                // console.log(data.provincias);

                setCategorias(data.metadata.countByCategory)
            })
    }, [])

    return (
        <React.Fragment>

            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800"><center>Listado Categorias</center></h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {
                                categorias.map((categoria, index) => {
                                    return <Categoria  {...categoria} key={index} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}


export default ListadoCategorias;