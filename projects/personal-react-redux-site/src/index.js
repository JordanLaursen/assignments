import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore} from "redux";
// import { Provider } from "react-redux";
// import reducer from "./redux"
import App from './App';
import "./styles.css";

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
        <App />,
        document.getElementById('root'));
    // <Provider store={store}>
        // </Provider>,
