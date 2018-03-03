import React, {Component} from 'react';
import {connect} from "react-redux";
import {addOneSecond} from "./redux";
import TimerDisplay from "./TimerDisplay";

// import TimerButtons from "./TimerButtons";
let id;
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            intervalId: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        id = setInterval(this.props.addOneSecond, 1000);
        this.setState({intervalId: id})
    }

    handleStop(){
        
    }

    render() {
        return (
            <div>
                <TimerDisplay
                    seconds={this.props.seconds}
                    minutes={this.props.minutes}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}
// <TimerButtons />
export default connect(state => state, { addOneSecond })(App);
