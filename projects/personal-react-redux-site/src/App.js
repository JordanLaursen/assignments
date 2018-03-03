import React, {Component} from 'react';
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

class App extends Component {
    constructor(){
        super();
        this.state = {
            deckId: "",
            dealerPile: []
        }
        this.handleDealerPile = this.handleDealerPile.bind(this);
    }

    componentDidMount(){
        axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(response => {
            console.log(response);
            this.setState({
                deckId: response.data.deck_id
            });
        });
    }

    handleDealerPile(){
        axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/pile/dealerPile/add/?deck_count=1`).then(response => {
            console.log(response.cards);
            this.setState(prevState => {
                dealerPile: [...prevState.dealerpile, prevState.response.card]
            });
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <h1>{this.state.deckId}</h1>
                <Footer />
            </div>
        );
    }
}

// this.state = {
//     deckId = null;
// }

// constructor(){
//     state();
// }

export default App;
