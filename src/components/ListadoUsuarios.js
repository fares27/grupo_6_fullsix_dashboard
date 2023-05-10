import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Usuario from "./Usuario";

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
                setUsuarios(data.users)
            })
    }, [])


    return (

        <>
            <div>
                <h2 className="text-center m-3">Listado de Usuarios</h2>
                <div className="col-md-6 m-auto">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Primer Nombre</th>
                                <th>Segundo Nombre</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usuarios.map((usuario, index) => {
                                    return <Usuario {...usuario} key={usuario + index}/>
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default TotalUsuario;