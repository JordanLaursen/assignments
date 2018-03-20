import React, { Component } from 'react';
import axios from "axios";
import Content from "./Content";

class App extends Component {
    constructor(){
        super();
        this.state = {
            bounties: [],
            bountyName: ""
        }
        
    }
    
    componentDidMount() {
        axios.get("/bounties").then(response => {
            console.log(response.data);
            this.setState({
                bounties: response.data
            });
        });
    }
    
render() {
    return (
        <Content {...this.state} />
        );
    }
}

export default App;
