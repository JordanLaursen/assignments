



export function addOneSecond(){
    return{
        type: "ADD_ONE_SECOND"
    }
}

export function reset(){
    return{
        type: "RESET"
    }
}

function reducer(prevState = {minutes: 0, seconds: 0}, action){
    switch (action.type) {
        case "ADD_ONE_SECOND":
            return {
                ...prevState,
                seconds: prevState.seconds < 59 ? prevState.seconds + 1 : 0,
                minutes: prevState.seconds === 59 ? prevState.minutes + 1 : prevState.minutes
            };
        case "RESET":
            return {
                seconds: 0,
                minutes: 0
            }
        default:
            return prevState;
    }
}

export default reducer;
