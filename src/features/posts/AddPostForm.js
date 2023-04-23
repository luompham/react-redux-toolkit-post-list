import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { postAdded } from './postsSlice'

console.log(postAdded().type);

export const AddPostForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const onSavePostsClicked = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content,
                })
            );
            setTitle('');
            setContent('');
        }
    }

    return (
        <section>
            <h2>Add new posts</h2>
            <form action="">
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label htmlFor="postContent">Post Content:</label>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    cols="30"
                    rows="10"
                ></textarea>
                <button type='button' onClick={onSavePostsClicked}>Save posts</button>
            </form>
        </section>
    )
};
