import React from 'react';


const CommentDetail = (props) => {
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.image}/>
                </a>
                <div className="content">
                    <a href="/" className="author">{props.author}</a>
                    <div className="metadata">
                        <span className="date">{props.time}</span>
                    </div>
                    <div className="text">{props.post}</div>
                </div>
            </div>
    );
}

//to make this component available to everyone outside this file or rest of our project.
export default CommentDetail;