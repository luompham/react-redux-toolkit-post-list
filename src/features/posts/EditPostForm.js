import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


import { postUpdated } from './postsSlice';


export const EditPostForm = ({ match }) => {
    const { postId } = match.params;

    const post = useSelector(state =>
        state.posts.find(post => post.id === Number(postId)));

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const dispatch = useDispatch();
    const history = useHistory();

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postUpdated({
                id: Number(postId),
                title,
                content
            }));
            history.push(`/posts/${postId}`)
        };
    };

    return (
        <section>
            <h2>Edit Post</h2>
            <form action="">
                <label htmlFor="postTitle">Title:</label>
                <input
                    name='postTitle'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    id='postTitle'
                    placeholder="What's on your mind?"
                    type="text" />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    name="postContent"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    id="postContent"
                    cols="30"
                    rows="10"
                ></textarea>
                <button type='button' onClick={onSavePostClicked}>Save Post </button>
            </form>
        </section>
    );
};
