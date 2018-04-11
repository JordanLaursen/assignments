import React from "react";
import myResume from "../images/myResume.png";
// import ResumeDownload from "/public/downloads/JordanLaursenResume.pdf";

const Resume = () => {
    return(
        <div>

            <div className="RonHoward">
                <h2>Resume</h2>
                <img className="resumeIMG" src={myResume} alt="img of my resume"/>
                <a className="downloadResume" download="Jordan-Laursen-Resume.pdf" href="Jordan-Laursen-Resume.pdf"><div className="downloadButton" >PDF Download of Resume</div></a>
            </div>
        </div>
    )
}

export default Resume;
