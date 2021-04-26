import React, { Component }from "react";
import "./style.css";
import API from "../../utils/API"
import EmployeeDetail from "./detail";
import EmployeeArray from "./array";

class Table extends Component {
    state = {
        result: [],
        oneresult: {},
        dob: {},
        image: {},
        name: {},
        search: ""
    };

    componentDidMount() {
        this.getEmployee();
    }
    
    getEmployee = () => {
        API.getUsers()
        .then(res => {
                // const employees = Array.from(res.data)
                // this.setState({employees})

            this.setState({
                result: res.data.results,
                oneresult: res.data.results[0],
                image: res.data.results[0].picture,
                dob: res.data.results[0].dob,
                name: res.data.results[0].name,                 
            })
        })
        .catch(err => console.log(err));
    };

    // SEE 20-Stu_AJAX - components-OmdbContainer.js
    // handleInputChange = event => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.getEmployee(this.state.search);
    // }
    

    render() {            
        // const displayDOB = this.state.dob.date.toLocaleTimeString();
        // console.log(this.state.result)
        const employee = this.state.result
        // console.log(employee)
    return (


            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>

                    {this.state.image.thumbnail ? (
                        <EmployeeDetail 
                        thumbnail={this.state.image.thumbnail}
                        first={this.state.name.first}
                        last={this.state.name.last}
                        cell={this.state.oneresult.cell}
                        email={this.state.oneresult.email}
                        date={this.state.dob.age}
                    />
                    ) : (
                        <h3>No results to Display</h3>
                    )}

                    <tr>
                        <td>Image</td>
                        <td>First Last</td>
                        <td>612-123-4567</td>
                        <td>anymail@email.com</td>
                        <td>02/20/1984</td>
                    </tr>
                    
                    <EmployeeArray 
                    props={employee}
                    />

                </tbody>
            </table>
        );

    }
  
}

export default Table;