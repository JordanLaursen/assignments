import React, {Component} from "react";

class ButtonsDisplay extends Component{
    constructor() {
        super();
        this.state = {
            colorBool: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState(prevState => {
            return {
                colorBool: !prevState.colorBool
            }
        });
    }

    render() {

        return(
            <div className="container">
                <div className="boxContainers">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
                <div className="boxContainers">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
                <button onSubmit={this.handleSubmit}>howdy</button>
            </div>
        );
    }
}

export default ButtonsDisplay
