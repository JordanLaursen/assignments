const redux = require("redux");

const state = []

function addContact(personName, personPhone, personEmail){
    return{
        type: "ADD_CONTACT",
        personName,
        personPhone,
        personEmail
    }
}

function removeContact(personName, personPhone, personEmail) {
    return{
        type: "REMOVE_CONTACT",
        personName,
        personPhone,
        personEmail
    }
}

function myReducer(prevState = state, action) {
    switch (action.type) {
        case "ADD_CONTACT":
            return [...prevState, action.personName, action.personPhone, action.personEmail]
        case "REMOVE_CONTACT":
            return prevState.filter((item) => {
                return item.personName !== action.personName;
            })
        default:
            return prevState;
    }
}

const store = redux.createStore(myReducer);

store.subscribe(()=> {
    console.log(store.getState())
})

store.dispatch(addContact("Buffalo Bill", "555-555-5555", "BBill@gmail.com"));
store.dispatch(addContact("Steve from minecraft", "696-969-6969", "steve@minecraft.com"));
store.dispatch(removeContact("Steve from minecraft", "696-969-6969", "steve@minecraft.com"));
