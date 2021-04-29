import React from "react";

function EmployeeArray (props) {
    console.log(props)
    return (
        <tr>
            <td><img alt={props.last} src={props.picture}></img></td>
            <td>{props.first} {props.last} </td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
        </tr>
    )

}

export default EmployeeArray;