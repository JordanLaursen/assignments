import React, {Component} from "react";
import axios from "axios";

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            colors: []
        }
    }


    componentDidMount(e){
        axios.get("http://www.colr.org/json/color/random").then((response) => {
            const color = response.data.colors[0].hex;
            this.state.colors.push(color);
            console.log(this.state.colors);
        });
    }

    render(){
        console.log("Hey you out there in the hall");
        return(
            <div>
                hi
            </div>
        )
    }
}

export default TodoList;
