import {createStore} from "redux";

export const add = () => {
    return {
        type: "ADD"
    }
}

export const subtract = () => {
    return {
        type: "SUB"
    }
}

const initialState = {
    number: 0,
    user: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                number: state.number + 1
            }
        case "SUB":
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return state
    }
}

const store = createStore(reducer);

export default store;
