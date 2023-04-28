import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { PostAuthor } from './PostAuthor';
import { TimeAgo } from './TimeAgo';
import { ReactionButton } from './ReactionButton';
import { selectAllPosts } from './postsSlice';


export const PostList = () => {

    //selector function from slice file
    const posts = useSelector(selectAllPosts);

    // ******can use selection function inline React Component ******
    /*
    const posts = useSelector(state => state.posts);  
    */

    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
    const rederedPosts = orderedPosts.map(post => {
        return (
            <article className='post-excerpt' key={post.id}>
                <h3> {post.title}</h3>
                <div>
                    <PostAuthor userId={post.user} />
                    <TimeAgo timestamp={post.date} />
                </div>
                <p className="post-content"> {post.content.substring(0, 100)}</p>

                <ReactionButton post={post} />

                <Link to={`/posts/${post.id}`} className="button muted-button">View Post</Link>
            </article>
        );
    })
    return (
        <section className='posts-list'>
            <h2>Posts</h2>
            {rederedPosts}

        </section>
    )
}

