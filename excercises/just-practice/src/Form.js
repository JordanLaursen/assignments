import React from "react";

const Form = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <label>
            name:
            <input
            name="name"
            type="text"
            onChange={props.handleChange}
            value={props.name}
            />
            </label>
            age:
            <label>
            <input
            name="age"
            type="text"
            onChange={props.handleChange}
            value={props.age}
            />
            </label>

            <button onSubmit={props.handleSubmit}>Submit</button>

        </form>
    );
}

export default Form;
