import React from "react";

const TimerDisplay = (props) => {
    return(
        <div>
            <div>
                <h1>{props.minutes < 10 ? 0 + "" + props.minutes : props.minutes}:{props.seconds < 10 ? 0 + "" + props.seconds: props.seconds}</h1>
                <button onClick={props.handleSubmit}>Start Timer</button>
                <button onClick={props.handleStop}>Stop Timer</button>
            </div>
        </div>

    );
}

export default TimerDisplay;
