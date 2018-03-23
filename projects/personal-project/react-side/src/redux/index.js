import {createStore} from "redux";

const initialState = {
    gamertag: "",
    game: "",
    console: "",
    users: []
}

const addUser = () => {
    return{
        type: "ADD_USER"
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state.users,

            }
        default:
            return {
                state
            }

    }
}

const store = createStore(reducer);

export default store;
