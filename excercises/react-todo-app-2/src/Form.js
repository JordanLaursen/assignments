import React from "react";

function Form(props){
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                Title:
                <input
                    name="title"
                    value={props.title}
                    onChange={props.handleChange}
                />
            </label>
            <button>Add Todo</button>
        </form>
    )
}

export default Form;
