import React from "react";
import "./style.css";

const Search = () => {
    return (

        <form className = "search">
            <div className="input-group mb-3">
                <input type="text" 
                    className="form-control" 
                    placeholder="Enter Employee Name Here" 
                    id="search"
                />
                <button className="btn btn-outline-secondary" 
                type="button" 
                id="button-addon2">Search</button>
            </div>
        </form>

    );
}

export default Search;