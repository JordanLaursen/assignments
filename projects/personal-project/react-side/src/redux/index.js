// import {createStore, applyMiddleware} from "redux";
// import thunk from "redux-thunk";
// import axios from "axios";
//
// const initialState = {
//     gamertag: "",
//     game: "",
//     console: "",
//     users: []
// }
//
// export const getUsers = () => {
//     return function(dispatch) {
//         return axios.get("/find-players").then(response => {
//             dispatch({
//                 type: "GET_USERS",
//                 users: response.data
//             })
//             console.log(response.data);
//         }).catch(err => {
//             console.log(err);
//         })
//     }
// }
//
// const addUser = (newUser) => {
//     return function(dispatch) {
//         return axios.post("/find-players", newUser).then(response => {
//             dispatch({
//                 type: "ADD_USER",
//                 newUser
//             })
//         })
//     }
// }
//
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "GET_USERS":
//             return {
//                 users: action.users
//             }
//         case "ADD_USER":
//             return {
//                 users: [...state.users, users]
//             }
//         default:
//             return state
//     }
// }
//
// const store = createStore(reducer, applyMiddleware(thunk));
//
// export default store;
