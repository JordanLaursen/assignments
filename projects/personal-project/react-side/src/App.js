import React, { Component } from 'react';
import Navbar from "./general/Navbar";
import Footer from "./general/Footer";
import AddPlayer from "./AddPlayer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <AddPlayer />
        <Footer />
      </div>
    );
  }
}

export default App;
