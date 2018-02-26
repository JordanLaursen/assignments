import React, {Component} from "react";
import Form from "./Form";

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            name: "",
            age: ""
        });
    }

    render() {
        return(
            <Form
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.state}
            />
        );
    }
}

export default FormContainer;
