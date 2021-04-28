import React from "react";
import "./style.css";

const Search = (props) => {
    console.log(props)
    return (

        <form className="form-group mb-3"> 
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    type="text" 
                    className="form-control" 
                    placeholder="Enter Employee Name Here" 
                    id="search"
                />
                <button
                onClick={props.handleFormSubmit} 
                className="btn btn-success mt-3" 
                type="button">
                Search</button>
        </form>

    );
}

export default Search;