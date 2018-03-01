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
            <label>
                Description:
                <input
                    name="description"
                    value={props.description}
                    onChange={props.handleChange}
                />
            </label>
            <label>
                Price:
                <input
                    name="price"
                    value={props.price}
                    onChange={props.handleChange}
                />
            </label>
            <button>Add Todo</button>
        </form>
    )
}

export default Form;
