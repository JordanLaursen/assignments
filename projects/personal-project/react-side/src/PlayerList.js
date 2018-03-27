import React from "react";

const PlayerList = (props) => {
    return(
        <div className="playerListDiv">
            <ul>
                <li>{props.gamertag}</li>
                <li>{props.games}</li>
                <li>{props.console}</li>
            </ul>
            <button onClick={() => props.handleDelete(props.id)}>Delete</button>
        </div>
    );
}

export default PlayerList;
