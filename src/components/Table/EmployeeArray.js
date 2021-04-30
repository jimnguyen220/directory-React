import React from "react";

function EmployeeArray (props) {
    // console.log(props)
    const altTag= props.first+"-"+props.last+"-Photo";
    return (
        <tr key={props.id}>
            <td><img alt={altTag} src={props.picture}></img></td>
            <td>{props.first} {props.last} </td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
        </tr>
    )

}

export default EmployeeArray;