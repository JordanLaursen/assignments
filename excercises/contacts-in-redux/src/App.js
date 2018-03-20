import React, { Component } from 'react';
import {add, subtract} from "./redux";
import {connect} from "react-redux"

class App extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div>
                <button onClick={this.props.subtract}> - </button>
                <h1>{this.props.number}</h1>
                <button onClick={this.props.add}> + </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.number
    }
}

export default connect(mapStateToProps, {add, subtract})(App);

