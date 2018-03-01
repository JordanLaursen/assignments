import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <header>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
        </header>
    );
}

export default Navbar;
