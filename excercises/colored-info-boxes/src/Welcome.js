import React from "react";


const Welcome = (props) => {
    let colors;
    if(props.time === "Spring") {
        colors = "green";
    } else if (props.time === "Winter") {
        colors = "blue";
    } else if (props.time === "Fall") {
        colors = "orange";
    } else {
        colors = "red";
    }
    const color = {
        backgroundColor: colors
    }
    return(
        <div className="travelBlocks" style={color}>
            <h1>{props.place}</h1>
            <h2>{props.price}</h2>
            <h3>{props.time}</h3>
        </div>
    );
}








// const Welcome = (props) => {
//
//     const color = {backgroundColor: props.color};
//
//     return (
//         <div  style={color} className="stylings">
//             <h1 className="insideBoxes">Title: {props.title}</h1>
//             <h1>Subtitle: {props.subtitle}</h1>
//             <h1>Info: {props.info}</h1>
//         </div>
//     );
// }

export default Welcome;
