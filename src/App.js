//import React, ( Component ) from 'react';
import Post from './Post/Component/Post';
import './App.css';
import {Component} from "react";

class App extends Component {
    constructor(props){
        super(props);
        this.addPost = this.addPost.bind(this);
        this.state = {
            posts: [],
            newPostBody: '',
        }
    }

    addPost(){
        const newState = Object.assign({}, this.state);
        newState.posts.push(this.state.newPostBody);
        newState.newPostBody = '';
        this.setState(newState);

    }
    handlePostEditorInputChange(ev){
    this.setState(ed{
        newPostBody: ev.target.value
    })
    }
    render(){
        return (
            <div>
                {
                    this.state.posts.map((postBody, idx) => {
                        return (
                            <Post key={idx} postBody={postBody}/>
                        )
                    })
                }

                <div className="panel panel-default post-editor">
                    <div className="panel-body">
                        <textarea className="form-control post-editor-input" onChange = {this.handlePostEditorInputChange} />
                        <button className="btn btn-success post-editor-button" onClick={this.addPost}>Post</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
