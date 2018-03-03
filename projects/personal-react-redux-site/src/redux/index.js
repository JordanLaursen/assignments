// import axios from "axios";
//
//
//
// export function newDeck() {
//     return{
//         type: "NEW_DECK"
//     }
// }
//
// export function
//
// function reducer(prevState={ deckId: null}, action){
//     switch (action.type) {
//         case "NEW_DECK":
//             return {
//                 deckId: axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(response => {
//                     return response.data.deck_id;
//                 })
//             }
//         default:
//             return prevState;
//
//     }
// }
//
// export default reducer;
