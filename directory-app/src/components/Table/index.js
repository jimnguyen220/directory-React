import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API"
// import EmployeeDetail from "./detail";
import EmployeeArray from "./EmployeeArray";

class Table extends Component {
    state = {
        result: [],
        search: ""
    };

    componentDidMount() {
        this.getEmployee();
    }

    getEmployee = () => {
        API.getUsers()
            .then(res => {

                this.setState({
                    result: res.data.results,
                    // oneresult: res.data.results[0],
                    // image: res.data.results[0].picture,
                    // dob: res.data.results[0].dob,
                    // name: res.data.results[0].name,
                })
            })
            .catch(err => console.log(err));
    };


    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getEmployee(this.state.search);
    };


    render() {

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

                    {/* {this.state.image.thumbnail ? (
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
                    )} */}
                
                    <EmployeeArray props={this.state.result}
                        // thumbnail={this.state.result.image.thumbnail}
                        // first={this.state.result.first}
                        // last={this.state.result.last}
                        // cell={this.state.oneresult.cell}
                        // email={this.state.oneresult.email}
                        // date={this.state.dob.age}
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />
                </tbody>
            </table>
        );

    }

}

export default Table;