import React, { Component } from 'react';


class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.timesTwo = this.timesTwo.bind(this);
        this.divideByTwo = this.divideByTwo.bind(this);
    }

    minusOne() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    addOne() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    timesTwo() {
        this.setState(prevState => {
            return {
                count: prevState.count * 2
            }
        })
    }

    divideByTwo() {
        this.setState(prevState => {
            return {
                count: prevState.count / 2
            }
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.divideByTwo}>/2</button>
                <button onClick={this.minusOne}>-</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.addOne}>+</button>
                <button onClick={this.timesTwo}>*2</button>
            </div>
        )
    }
}

export default App;
