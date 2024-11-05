import React, { useState, useEffect } from 'react';
import PostsContainer from './PostsContainer';
import PostForm from './PostForm';

const FakeApiApp = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newPost, setNewPost] = useState({ title: '', body: '' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleAddPost = () => {
        const newPostWithId = { ...newPost, id: data.length + 1 };
        setData([newPostWithId, ...data]);
        setNewPost({ title: '', body: '' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
    };

    return (
        <div>
            <h1>Fake API App</h1>
            {loading ? <p>Loading...</p> : null}
            <PostForm
                newPost={newPost}
                onInputChange={handleInputChange}
                onAddPost={handleAddPost}
            />
            <PostsContainer posts={data} />
        </div>
    );
};

export default FakeApiApp;