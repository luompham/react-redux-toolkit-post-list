import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postAdded } from './postsSlice';

import { addNewPost } from './postsSlice';



console.log(postAdded().type);

export const AddPostForm = () => {
    const dispatch = useDispatch();

    const users = useSelector(state => state.users);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';



    const userOptions = users.map(user => {
        return (
            <option
                key={user.id}
                value={user.id}
            >{user.name}</option>
        )
    });

    const onSavePostsClicked = async () => {
        // if (title && content) {
        //     dispatch(
        //         postAdded(title, content, userId)
        //     );
        //     setTitle('');
        //     setContent('');
        //     setUserId('');
        // }
        if (canSave) {
            try {
                setAddRequestStatus('pending');
                await dispatch(addNewPost({ title, content, user: userId })).unwrap();
                setTitle('');
                setContent('');
                setUserId('');
            } catch (error) {
                console.error('Failed to save the post: ', error)
            } finally {
                setAddRequestStatus('idle');
            }
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
                <label htmlFor="postAuthor">Author:</label>
                <select name="postAuthor" id="postAuthor" value={userId}
                    onChange={e => setUserId(e.target.value)}>
                    <option value=""></option>
                    {userOptions}
                </select>
                <label htmlFor="postContent">Post Content:</label>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    cols="30"
                    rows="10"
                ></textarea>
                <button
                    type='button'
                    //validate input, chỉ cho click nút Save Post khi có dữ liệu ở input title và content
                    disabled={!(title && content && userId)}
                    onClick={onSavePostsClicked}
                >Save posts</button>
            </form>
        </section>
    )
};
