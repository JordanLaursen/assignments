import React from "react";

const NewPost = (props) => {
    return(
        <div className="centerNewPost">
            <form onSubmit={props.handlePost} className="addArticle eachArticle">
                <input
                type="text"
                name="newTitle"
                placeholder="Title"
                value={props.newTitle}
                onChange={props.handleChange}
                />

                <textarea
                type="text"
                name="newArticle"
                placeholder="Article"
                value={props.newArticle}
                onChange={props.handleChange}
                />
                <button onSubmit={props.handlePost} className="postButton">Create New Post</button>
            </form>
        </div>
    )
}

export default NewPost;
