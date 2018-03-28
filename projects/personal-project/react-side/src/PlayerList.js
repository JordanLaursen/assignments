import React from "react";

const PlayerList = (props) => {
    let bg;
    let color;


    if(props.console === "Xbox One") {
        bg = "#107c10"
    } else if (props.console === "Playstation 4") {
        bg = "#003791"
        color = "white"
    } else {
        bg = "#1CCAD8"
    }


    const styles = {
        backgroundColor: bg,
        color: color
    }

    return(
        <div style={styles} className="playerListDiv">
            <ul>
                <li>Gamertag: {props.gamertag}</li>
                <li>\ \ \ Game: {props.games}</li>
                <li>--Console: {props.console}</li>
            </ul>
            <button onClick={() => props.handleDelete(props.id)}>Delete</button>
        </div>
    );
}

export default PlayerList;
