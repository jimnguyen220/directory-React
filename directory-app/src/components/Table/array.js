import React from "react";

function EmployeeArray (props) {
    console.log(props)
    


    return (
        <tr>
            {Array.from(props.props).map(function(employee){
                let thumbnail = employee.picture.thumbnail;
                console.log(thumbnail);

                <tr>
                    <td><img alt="employee" src={thumbnail}></img></td>
                    <td>{props.first} {props.last} </td>
                    <td>{props.cell}</td>
                    <td>{props.email}</td>
                    <td>{props.date}</td>
                </tr>

            })
            }
        </tr>
    )

}

export default EmployeeArray;