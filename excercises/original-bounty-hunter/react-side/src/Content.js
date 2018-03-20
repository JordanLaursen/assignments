import React from "react";

function Content(props) {
    const mappedBounties = props.bounties.map(item => {
        return(
            <li key={item.firstName + item.lastName + item.type}>{item.firstName} {item.lastName} {item.amount} {item.type} {item.living}</li>
        );
    })
    return (
        <div className="App">
            <ul className="listings">{mappedBounties}</ul>
        </div>
    );
}


export default Content;
