import React from 'react';

function Todo(props){

    const styles = {
        color: props.info.completed ? "red" : "black",
        textDecoration: props.info.completed ? "line-through" : "none"
    }
    return (
        <div style={styles}>
            <h1>Title: {props.info.title}</h1>
            <p>Description: {props.info.description}</p>
            <p>Price: {props.info.price}</p>
            <button onClick={()=>props.handleDelete(props.info._id)}>Delete</button>
            { props.info.completed ?
                <button onClick={()=>props.handleComplete(props.info._id)}>Undo</button>
            :
                <button onClick={()=>props.handleComplete(props.info._id)}>Complete</button>
            }
        </div>

    )
}

export default Todo;
