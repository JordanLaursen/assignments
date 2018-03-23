import React from "react";

const AddPlayer = () => {
    return(
        <div className="addPlayer">
            <form>

                <select>
                    <option value="Xbox One">Xbox One</option>
                    <option value="PS4">PS4</option>
                    <option value="PC">PC</option>
                </select>

                <input
                type="text"
                placeholder="Add Gamertag"
                />

                <input
                type="text"
                placeholder="Add Game To Play"
                />

                <button>Submit</button>

            </form>
        </div>
    )
}

export default AddPlayer;
