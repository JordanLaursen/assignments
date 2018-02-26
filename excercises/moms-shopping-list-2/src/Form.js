import React from "react";

const Form = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <label>
                Item:
                <input
                    name="item"
                    onChange={props.handleChange}
                    value={props.item}
                />
            </label>

            <button onSubmit={props.handleSubmit}>Submit</button>
        </form>
    )
}

export default Form;
