import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Producto from "./Producto";

function Productos() {

    // declarar el estado inicial del componente
    const [productos, setProductos] = useState([]);

    // Trabajar con el ciclo de vida del componente

    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then(response => {
                return response.json()
            })
            .then(data => {
                // console.log(data.provincias);

                setProductos(data.products)
            })
    }, [])

    return (

        <>
            <div>
                <h2 className="text-center m-3">Listado de Productos</h2>
                <div className="col-md-6 m-auto">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre Producto</th>
                                <th>Precio</th>
                                <th>Categoria</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productos.map((producto, index) => {
                                    return <Producto {...producto} key={producto + index}/>
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Productos;