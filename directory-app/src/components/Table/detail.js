import React from "react";

function EmployeeDetail(props) {
    return(
        <tr>
            <td><img src={props.thumbnail}></img></td>
            <td>{props.first} {props.last} </td>
            <td>{props.cell}</td>
            <td>{props.email}</td>
            <td>{props.date}</td>
        </tr>
    );
}

export default EmployeeDetail