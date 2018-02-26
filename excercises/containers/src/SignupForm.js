import React from "react";


const SignupForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <label>
                <input
                name = "firstName"
                type = "text"
                onChange = {props.handleChange}
                value = {props.firstName}
                />
                First Name
            </label>
            <br />
            <label>
                <input
                name = "lastName"
                type = "text"
                onChange = {props.handleChange}
                value = {props.lastName}
                />
                Last Name
            </label>
            <br />
            <label>
                <input
                name = "email"
                type = "email"
                onChange = {props.handleChange}
                value = {props.email}
                />
                Email
            </label>
            <br />
            <label>
                <input
                name = "password"
                type = "password"
                onChange = {props.handleChange}
                value = {props.password}
                />
                Password
            </label>
            <br />
            <label>
                <input
                name = "passwordConfirm"
                type = "password"
                onChange = {props.handleChange}
                value = {props.passwordConfirm}
                />
                Confirm Password
            </label>
            <button onSubmit={props.handleSubmit}>Submit</button>
        </form>
    );
}

export default SignupForm;
