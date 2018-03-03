import React, {Component} from "react";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            names: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e){
        e.preventDefault();
        this.setState( prevState => {
            return{
                names: [...prevState.names, prevState.name],
                name: ""
            }
        });
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        let mappedNames = this.state.names.map(function(name) {
            return <li>{name}</li>
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    What is your name? :
                    <input
                        onChange={this.handleChange}
                        value={this.state.name}
                        name="name"
                    />
                    <button onSubmit={this.handleSubmit}>Submit</button>
                </form>
                <ul>{mappedNames}</ul>
            </div>
        )
    }
}

export default Form;
