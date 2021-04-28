import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API"
import EmployeeArray from "./EmployeeArray";
import Search from "./Search";

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
                            <th scope="col"
                            // onClick={(e)=>this.sortBy(e, 'name')}
                            >Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <EmployeeArray props={this.state.result}/>
                    </tbody>
                </table>

            </>
        );

    }

}

export default Table;