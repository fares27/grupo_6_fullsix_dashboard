import React from 'react';
import TarjetaTotales from './TarjetaTotales';

let totalProductos = {
    color:   "primary",
    titulo: "Total Productos",
    valor: 21,
    icono: "fas fa-cart-plus",
}

let totalCategorias ={
    color:   "success",
    titulo: "Total Categorias",
    valor: 79,
    icono: "fas fa-tag",
}

let totalUsuarios = {
    color:   "warning",
    titulo: "Total Usuarios",
    valor: 49,
    icono: "fas fa-user",
}

let listado = [totalProductos,totalCategorias,totalUsuarios];


function Totales(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        
            {
                listado.map((producto,index)=>{
                    return <TarjetaTotales {...producto}  key= {index}/>
                })
            }      
        </React.Fragment>
    )
}
export default Totales;