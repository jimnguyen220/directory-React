import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API"
import EmployeeArray from "./EmployeeArray";
import Search from "./Search";

class Table extends Component {
    state = {
        result: [],
        filteredResult: [],
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
                    filteredResult: res.data.results
                })
            })
            .catch(err => console.log(err));
    };



    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        console.log(value);
        console.log(name);
        
        let filter = this.state.result.filter(employee => {

            if (value == employee.name.first || employee.name.last || employee.cell || employee.email) {
                
                return true;
            }
        })

        this.setState({
            filteredResult: filter,
            [name]: value
        });
    };



    handleFormSubmit = event => {
        event.preventDefault();
        this.getEmployee(this.state.search);
    };

    // compareBy(key) {
    //     return function (a,b) {
    //         if (a[key] < b[key]) return -1;
    //         if (a[key] > b[key]) return 1;
    //         return 0;
    //     }
    // }

    // sortBy(key) {
    //     let array = [...this.state.result];
    //     array.sort(this.compareBy(key));
    //     this.setState({ result: array })
    // }


    render() {
        // console.log(this.state.result);
        return (
            <>
                <Search
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(this.state.filteredResult).map((employees) =>                           
                            <EmployeeArray 
                                picture={employees.picture.medium}
                                first={employees.name.first}
                                last={employees.name.last}
                                phone={employees.cell}
                                email={employees.email}
                            />
                        )}

                    </tbody>
                </table>

            </>
        );

    }

}

export default Table;