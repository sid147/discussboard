import React from 'react';

const Post = (props) => (
    <div className= "panel panel-default post-body">
        <div className="panel-body">
            {  props.postBody }
        </div>
    </div>
)

export default Post;

