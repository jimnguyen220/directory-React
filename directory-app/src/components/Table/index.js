import React, { Component }from "react";
import "./style.css";
import API from "../../utils/API"
import EmployeeDetail from "./detail";

class Table extends Component {
    state = {
        result: {},
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
        .then(res =>

            this.setState({
                result: res.data.results[0],
                image: res.data.results[0].picture,
                dob: res.data.results[0].dob,
                name: res.data.results[0].name,                          },
                console.log(res.data.results[0]))
            )
        .catch(err => console.log(err));
    };

    // SEE 20-Stu_AJAX - components OmdbContainer.js
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
    return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.result.thumbnail,
                        <EmployeeDetail 
                        thumbnail={this.state.image.thumbnail}
                        first={this.state.name.first}
                        last={this.state.name.last}
                        cell={this.state.result.cell}
                        email={this.state.result.email}
                        date={this.state.dob.date}
                    />
                    }

                    <tr>
                        <td>Image</td>
                        <td>First Last</td>
                        <td>612-123-4567</td>
                        <td>anymail@email.com</td>
                        <td>02/20/1984</td>
                    </tr>

                </tbody>
            </table>
        );

    }
  
}

export default Table;