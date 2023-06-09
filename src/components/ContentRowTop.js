import React from 'react';
import UltimoProducto from './UltimoProducto';
import ListadoCategorias from './ListadoCategorias';
import TotalUsuario from './TotalUsuario';
import TotalCategoria from './TotalCategoria';
import TotalProducto from './TotalProducto';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard FullSix</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">
					<TotalProducto />
					<TotalCategoria />
					<TotalUsuario />
					</div>
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						<UltimoProducto />
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<ListadoCategorias />

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;