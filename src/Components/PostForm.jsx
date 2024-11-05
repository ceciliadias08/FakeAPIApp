import React from 'react';

const PostForm = ({ newPost, onInputChange, onAddPost }) => {
    return (
        <div>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={newPost.title}
                onChange={onInputChange}
            />
            <input
                type="text"
                name="body"
                placeholder="Body"
                value={newPost.body}
                onChange={onInputChange}
            />
            <button onClick={onAddPost}>Add Post</button>
        </div>
    );
};

export default PostForm;