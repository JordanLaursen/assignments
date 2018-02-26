import React, {Component} from "react";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            name: ""
        })
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <form>
                What is your name?:
                <input
                    onChange={this.handleChange}
                    value={this.state.name}
                    name="name"
                />
                <button>submit</button>
                <h1>{this.state.name}</h1>
            </form>
        )
    }
}

export default Form;
