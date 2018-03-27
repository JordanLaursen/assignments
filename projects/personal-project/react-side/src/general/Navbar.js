import React from "react";

const Navbar = (props) => {
    return(
        <div className="nav">
            <ul className="navUl">
                <li onClick={props.handleAllUsers}>All Consoles</li>
                <li onClick={props.handleXbox}>Xbox One</li>
                <li onClick={props.handlePlaystation}>Playstation 4</li>
                <li onClick={props.handlePC}>PC Master Race</li>
                <li>Log in</li>
            </ul>
        </div>
    )
}

export default Navbar;
