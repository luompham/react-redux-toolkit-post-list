import { useSelector } from 'react-redux';

import { selectAllPosts } from '../posts/postsSlice';
import { selectUserById } from './usersSlice';


export const UserPage = ({ match }) => {

    const { userId } = match.params;

    const user = useSelector(state => selectUserById(state, userId));

    const postsForUser = useSelector(state => {
        const allPosts = selectAllPosts(state);
        return allPosts.filter(post => post.user === userId);
    });

    const postTitle = postsForUser.map(post => (
        <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
    ));

    return (
        <section>
            <h2>{user.name}</h2>
            <ul>{postTitle}</ul>
        </section>
    );

}