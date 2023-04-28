import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import { ReactionButton } from './ReactionButton';
import { selectPostById } from './postsSlice';

export const SinglePostPage = ({ match }) => {
    const { postId } = match.params;

    //selector function from slice file
    const post = useSelector(state => selectPostById(state, postId));

    // ******can use selection function inline React Component ******
    /*
    const post = useSelector(state =>
    state.posts.find(post => post.id === Number(postId)););
    */


    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
                <ReactionButton post={post} />
                <Link to={`/editPost/${post.id}`} className='button'>Edit Post</Link>
            </article>
        </section>
    )
};
