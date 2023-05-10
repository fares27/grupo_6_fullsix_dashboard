import React from 'react';

function TarjetaTotalCategorias(props){
    return(
        <React.Fragment>
            <div className="col-md-4 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Total Categorias</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.countCategorys}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fas fa-tag fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default TarjetaTotalCategorias;