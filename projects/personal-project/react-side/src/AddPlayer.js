import React from "react";

const AddPlayer = (props) => {
    return(
        <div className="addPlayer">
            <h1>Add your Profile</h1>
            <form onSubmit={props.handleNewUser}>
                <select name="console" onChange={props.handleChange}>
                    <option>Select a Console</option>
                    <option name="console" value="Xbox One">Xbox One</option>
                    <option name="console" value="Playstation 4">PS4</option>
                    <option name="console" value="PC">PC</option>
                </select>

                <input
                name="gamertag"
                type="text"
                placeholder="Add Gamertag"
                onChange={props.handleChange}
                value={props.gamertag}
                />

                <input
                name="games"
                type="text"
                placeholder="Add Game To Play"
                onChange={props.handleChange}
                value={props.games}
                />

                <button onSubmit={props.handleNewUser}>Submit</button>
            </form>
        </div>
    )
}

export default AddPlayer;
