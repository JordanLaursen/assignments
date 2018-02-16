import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import "./styles.css";

const App = () => {
    return (
        <div className="content">
            <Navbar />
            <Body />
            <Footer />
        </div>
    );
}


export default App;
