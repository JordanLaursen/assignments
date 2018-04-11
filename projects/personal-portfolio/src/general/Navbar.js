import React from "react";
import webLogo from "../images/JordanLaursen.png";

const Navbar = () => {
    return(
        <div className="navDiv">
            <img className="logo" src={webLogo} alt=""/>
            <div className="sectionsDiv">
                <h4>About Me</h4>
                <h4>Projects</h4>
                <h4>Resume</h4>
            </div>
        </div>
    );
}

export default Navbar;
