import React, { Component } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import {Switch, Route} from "react-router-dom";

const App = (props) => {
    return(
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/services" component={Services}/>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
