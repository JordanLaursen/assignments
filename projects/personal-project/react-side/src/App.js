import React, { Component } from 'react';
import Navbar from "./general/Navbar";
import Footer from "./general/Footer";
import AddPlayer from "./AddPlayer";
import PlayerList from "./PlayerList";
// import {connect} from "react-redux";
// import {getUsers} from "./redux";
import {Switch, Route} from "react-router-dom";
import axios from "axios";

class App extends Component {
    constructor() {
        super();
        this.state = {
            gamertag: "",
            games: "",
            console: "",
            xboxTrue: false,
            playstationTrue: false,
            pcTrue: false,
            users: [],
            specificUsers: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleNewUser = this.handleNewUser.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleXbox = this.handleXbox.bind(this);
        this.handlePlaystation = this.handlePlaystation.bind(this);
        this.handlePC = this.handlePC.bind(this);
        this.handleAllUsers = this.handleAllUsers.bind(this);
    }

    handleDelete(id){
        axios.delete("/find-players/" + id).then(response => {
            const leftExistingUsers = this.state.users.filter(user => {
                return id !== user._id;
            });
            this.setState({
                users: leftExistingUsers
            });
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    handleXbox() {
        const differentUsers = this.state.users.filter(user => {
            return (user.console === "Xbox One");
        });
        this.setState({
            xboxTrue: true,
            specificUsers: differentUsers
        });
        console.log(this.state.specificUsers);
        console.log(this.state);
    }

    handlePlaystation() {
        const differentUsers = this.state.users.filter(user => {
            return (user.console === "Playstation 4");
        });
        this.setState({
            playstationTrue: true,
            specificUsers: differentUsers
        });
        console.log(this.state.specificUsers);
        console.log(this.state);
    }

    handlePC() {
        const differentUsers = this.state.users.filter(user => {
            return (user.console === "PC");
        });
        this.setState({
            pcTrue: true,
            specificUsers: differentUsers
        });
        console.log(this.state.specificUsers);
        console.log(this.state);
    }

    handleAllUsers() {
        this.setState({
            xboxTrue: false,
            playstationTrue: false,
            pcTrue: false,
        })
    }


    handleNewUser(e) {
        e.preventDefault();
        const newUser = {
            gamertag: this.state.gamertag,
            games: this.state.games,
            console: this.state.console
        }
        axios.post("/find-players", newUser).then(response => {
            this.setState(prevState => ({
                users: [response.data, ...prevState.users],
                gamertag: "",
                games: ""
            }));
        });
    }

    componentDidMount() {
        axios.get("/find-players").then(response => {
            this.setState({
                users: response.data
            })
            console.log(this.state.users);
        })
    }

    // componentDidMount() {
    //     this.props.getUsers().then(() => {
    //         this.setState({
    //             users: this.props.users
    //         })
    //     })
    // }
    // if (play === xbox && play === pc && xbox === pc){
    //     show all
    // }else {
    //     if (play){
    //         users.filter(user => user.console === playstation)
    //         users.map()
    //     }else if(xbox){
    //         users.filter
    //     }
    // }

    render() {
        let mappedUsers;
        !(this.state.xboxTrue || this.state.playstationTrue || this.state.pcTrue)? mappedUsers = this.state.users.map(user => {
            return <PlayerList gamertag={user.gamertag} games={user.games} console={user.console} id={user._id} key={user._id} handleDelete={this.handleDelete}/>
        }): mappedUsers = this.state.specificUsers.map(user => {
            return <PlayerList gamertag={user.gamertag} games={user.games} console={user.console} id={user._id} key={user._id} handleDelete={this.handleDelete}/>
        })
        return (

            <div className="App">

                <Navbar
                handleXbox={this.handleXbox}
                handlePC={this.handlePC}
                handlePlaystation={this.handlePlaystation}
                handleAllUsers={this.handleAllUsers}
                />

                <AddPlayer
                handleChange={this.handleChange}
                handleNewUser={this.handleNewUser}
                {...this.state}
                />

                {mappedUsers}
                <Footer />
            </div>
        );
    }
}

export default App;

// const mapStateToProps = (state) => {
//     return{
//         users: state.users
//     }
// }

// export default connect(mapStateToProps, {getUsers})(App);
