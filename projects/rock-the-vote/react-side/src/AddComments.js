import React from "react";

const AddComments = (props) => {
    return(
        <div className="abcdefg">
            <textarea
            name="newComment"
            rows="10"
            tabIndex="4"
            placeholder="Comment"
            onChange={props.handleChange}
            value={props.newComment}
            ></textarea>
            <button onClick={(e)=> props.handleComment(props.id, props.comments)}>Submit Comment</button>
        </div>
    )
}

export default AddComments;
