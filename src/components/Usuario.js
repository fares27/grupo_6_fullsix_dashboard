import React from 'react';

function Usuario(props){
    return(
        <React.Fragment>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.first_name}</td>
                    <td>{props.last_name}</td>
                    <td>{props.email}</td>
                </tr>
        </React.Fragment>
    )
}
export default Usuario;