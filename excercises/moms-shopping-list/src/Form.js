import React from "react";

function Form(props){
    return(
        <form onSubmit={props.handleSubmit}>
            <label>
                Add New Item:
                <input
                    type="text"
                    name="item"
                    value={props.item}
                    onChange={props.handleChange}
                />
            </label>
            
            <button onSubmit={props.handleSubmit}>Submit</button>
        </form>
    )
}

export default Form;
