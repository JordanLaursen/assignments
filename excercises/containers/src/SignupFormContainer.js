import React, {Component} from "react";
import SignupForm from "./SignupForm";



class SignupFormContainer extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirm: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("Thank you for submitting your info");
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirm: ""
        })
    }

    render() {
        return (
            <SignupForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            {...this.state}/>
        );
    }
}




export default SignupFormContainer;
