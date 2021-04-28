import React from "react";

function EmployeeArray (props) {
    console.log(props)


    return (
        <>
            {props.props.map(function(employee){
                console.log(employee)
                const thumbnail = employee.picture.thumbnail;
                console.log(thumbnail);
                const first = employee.name.first;
                console.log(first);
                const last = employee.name.last;
                console.log(last);
                const cell = employee.cell;
                console.log(cell);
                const email = employee.email;
                console.log(email);
                const age = employee.dob.age;
                console.log(age);

                return(
                <tr>
                    <td><img alt="employee" src={thumbnail}></img></td>
                    <td>{first} {last} </td>
                    <td>{cell}</td>
                    <td>{email}</td>
                    <td>{age}</td>
                </tr>
                )

            })}

        </>
    )

}

export default EmployeeArray;