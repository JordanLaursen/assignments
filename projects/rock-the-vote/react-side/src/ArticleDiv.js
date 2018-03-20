import React, {Component} from "react";
import AddComments from "./AddComments";

class ArticleDiv extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        const mappedComments = this.props.comments.map(comment => {
            return <p>{comment}</p>
        });
        return(
            <div className="centerArticle">
                <div className="eachArticle">
                    <h1> {this.props.title} </h1>
                    <p> {this.props.article} </p>

                    <div className="voteDiv">

                        <button onClick={() => this.props.handleUpVote(this.props.id, this.props.vote)} className="buttons" ><i className="ion-android-add likeAndDislike"></i></button>
                        <p className="voteP"> {this.props.vote} </p>
                        <button onClick={() => this.props.handleDownVote(this.props.id, this.props.vote)} className="buttons"><i className="ion-android-remove likeAndDislike"></i></button>

                    </div>
                    <div>
                        <AddComments
                        comments={this.props.comments}
                        id={this.props.id}
                        {...this.props.state}
                        handleChange={this.props.handleChange}
                        handleComment={this.props.handleComment}
                        newComment={this.props.newComment}
                        />
                        <div className="commentDiv">
                            {mappedComments}
                        </div>

                    </div>

                    <div>
                        <button onClick={() => this.props.handleDelete(this.props.id)}> Delete Post </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleDiv;
