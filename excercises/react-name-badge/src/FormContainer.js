import React, {Component} from "react";
import Form from "./Form";
import ListContainer from "./ListContainer";

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            pob: "",
            phone: "",
            favFood: "",
            about: "",
            information: []
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
        this.setState(prevState => {
            return {
                firstName: "",
                lastName: "",
                email: "",
                pob: "",
                phone: "",
                favFood: "",
                about: "",
                information: [...prevState.information, prevState.firstName, prevState.lastName, prevState.email, prevState.pob, prevState.phone, prevState.favFood, prevState.about]
            }
        });
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <Form
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state}
                />
                <ListContainer
                    {...this.state}
                />
            </div>
        );
    }
}

export default FormContainer;
