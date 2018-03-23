import React, { Component } from 'react';
import Navbar from "./general/Navbar";
import Footer from "./general/Footer";
import AddPlayer from "./AddPlayer";
import {connect} from "react-redux";
import {Switch, Route} from "react-router-dom";
import axios from "axios";

class App extends Component {
    constructor() {
        super();
    }
    
    componentDidMount() {
        axios.get("/find-players").then(response => {
            console.log(response.data);
        })
    }
    
    
    render() {
        return (
            <div className="App">
                <Navbar />
                <AddPlayer />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        users: state.users
    }
}

export default connect(mapStateToProps, {})(App);

