import React from "react";

function Name(name) {
    return (
        <td>
            {name.first} {name.last}
        </td>
    )
}

export default Name;