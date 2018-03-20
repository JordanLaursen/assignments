import React, { Component } from 'react';
import Navbar from "./Navbar";
import axios from "axios";
import ArticleDiv from "./ArticleDiv";
import NewPost from "./NewPost";

class App extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            newTitle: "",
            newArticle: "",
            newComment: ""
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleUpVote = this.handleUpVote.bind(this);
        this.handleDownVote = this.handleDownVote.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }

    handleDelete(id) {
        axios.delete("/articles/" + id).then(response => {
            axios.get("/articles").then(response => {
                this.handleSort(response.data)
                this.setState({
                    articles: response.data
                });
            });
        });
    }

    handleSort(articles) {
        return articles.sort((a, b) => {
            return a.vote < b.vote
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleComment(id, comments) {
        const newComment = {
            comments: [...comments, this.state.newComment]
        }
        axios.put("/articles/" + id, newComment).then(res => {
            console.log(res.data);
            this.setState(prevState=>{
                return {
                    newComment: "",
                    articles: prevState.articles.map(article => {
                        if(article._id === res.data._id) {
                            return res.data;
                        } else {
                            return article;
                        }
                    })
                }
            });
        });
        // axios.get("/articles").then(response => {
        //     console.log(response.data[0]);
        //     let sorted = this.handleSort(response.data)
        //     this.setState({
        //         articles: sorted,
        //         newComment: ""
        //     });
        // });
    }

    handlePost(e) {
        e.preventDefault();
        const newsPost = {
            title: this.state.newTitle,
            article: this.state.newArticle
        };
        axios.post("/articles/", newsPost).then(response => {
            this.setState({
                newTitle: "",
                newArticle: ""
            });
        })
        axios.get("/articles").then(response => {
            console.log(response.data[0]);
            let sorted = this.handleSort(response.data)
            this.setState({
                articles: sorted
            });

        })
    }

    handleUpVote(id, votes) {
        console.log(id);
        const newUpVote = {
            vote: votes + 1
        }
        axios.put("/articles/" + id, newUpVote).then(response => {
            axios.get("/articles").then(response => {
                let sorted = this.handleSort(response.data)
                this.setState({
                    articles: sorted
                });
            });
        });
    }

    handleDownVote(id, votes) {
        const newDownVote = {
            vote: votes - 1
        }
        axios.put("/articles/" + id, newDownVote).then(response => {
            axios.get("/articles").then(response => {
                let sorted = this.handleSort(response.data)
                this.setState({
                    articles: sorted
                });
            })
        })
    }

    componentDidMount(){
        axios.get("/articles").then(response => {
            let sorted = this.handleSort(response.data)
            this.setState({
                articles: sorted
            });
        });
    }

    render() {
        const mappedArticles = this.state.articles.map(article => {
            return <ArticleDiv key={article._id} title={article.title} article={article.article} vote={article.vote} id={article._id} handleDelete={this.handleDelete} handleChange={this.handleChange} handleComment={this.handleComment} handleUpVote={this.handleUpVote} handleDownVote={this.handleDownVote} comments={article.comments} newComment={this.state.newComment}/>
        })
        return (
            <div className="App">
                <div className="fixedNav"> <Navbar /> </div>
                <NewPost
                handleChange={this.handleChange}
                handlePost={this.handlePost}
                {...this.state}
                />
                {mappedArticles}
            </div>
        );
    }
}

export default App;
