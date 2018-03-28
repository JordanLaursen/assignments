import React from "react";

const Navbar = (props) => {
    return(
        <div className="nav">
            <ul className="navUl">
                <form className="butts" onSubmit={props.handleSearch}>

                    <input
                    type="text"
                    name="searchGame"
                    onChange={props.handleChange}
                    value={props.searchGame}
                    />

                    <button onSubmit={props.handleSearch}>Submit</button>

                </form>
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
