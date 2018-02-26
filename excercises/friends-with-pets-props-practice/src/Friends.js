import React from "react";
import PropTypes from "prop-types";

const Friend = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <h3>{props.age}</h3>
            <p> {props.pets} </p>
        </div>
    )
}

Friend.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    pets: PropTypes.array
}

export default Friend;
