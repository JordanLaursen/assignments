import React, {Component} from 'react';
import Navbar from "./general/Navbar";
import About from "./general/About";
import Projects from "./general/Projects";
import Resume from "./general/Resume";

class App extends Component {
    render() {
        return (
            <div>

                <Navbar />
                <div className="bodyDiv">
                    <About />
                    <Projects />
                    <Resume />
                </div>

            </div>
        );
    }
}

export default App;
