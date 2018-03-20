import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
    constructor(){
        super();
        this.state = {
            bountyName: ""
        }
        
    }
    
    componentDidMount() {
        axios.get("/bounties").then(response => {
            console.log(response.data);
            this.setState({
                bountyName: response.data
            });
        });
    }
    
    render() {
      return (
        <div className="App">
            <h1>hello</h1>
            <h1>{this.state.bountyName}</h1>
        </div>
        );
    }
}

export default App;
