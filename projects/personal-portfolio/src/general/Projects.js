import React from 'react';
import CardCount from "../images/CardCounter.png";
import GamesFinder from "../images/PersonalProject.png";

const Projects = () => {
    return(
        <div className="projectsDiv">
            <h2>Projects</h2>
            <div className="imageDiv">
                <img className="imageWidth" src={CardCount} alt="Cards Image"/>
                <img src={GamesFinder} className="imageWidth" alt="Game finding app image"/>
            </div>
        </div>
    );
}

export default Projects;
