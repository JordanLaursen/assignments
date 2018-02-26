import React, {Component} from "react";
import Form from "./Form";
import ItemsList from "./ItemsList"

class ShoppingList extends Component {
    constructor() {
        super();
        this.state = {
            item: "",
            items: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
        // console.log(this.state.item);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState(prevState => {
            return {
                item: "",
                items: [...prevState.items, prevState.item]
            };
        });
    }

    render() {
        return(
            <div>
                <Form
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state}
                />
                <ItemsList
                    groceryItems={this.state}
                />
            </div>
        );
    }
}

export default ShoppingList;
