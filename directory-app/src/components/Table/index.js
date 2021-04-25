import React, { Component }from "react";
import "./style.css";
import API from "../../utils/API"

class Table extends Component {
    state = {
        image: "",
    };

    componentDidMount() {
        this.getEmployee();
    }
    
    getEmployee = () => {
        API.getUsers()
        .then(res =>
            // console.log(res)
            this.setState({
                image: res.data.data.results
            })
        )
        .catch(err => console.log(err));
    }

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
                    <tr>
                        <td>{this.state.image}</td>
                        <td>First Last</td>
                        <td>612-123-4567</td>
                        <td>anymail@email.com</td>
                        <td>02/20/1984</td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>First Last</td>
                        <td>612-123-4567</td>
                        <td>anymail@email.com</td>
                        <td>02/20/1984</td>
                    </tr>
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