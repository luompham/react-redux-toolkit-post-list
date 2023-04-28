import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';


const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀'
};

export const ReactionButton = ({ post }) => {
    const dispatch = useDispatch();
    const { id } = post;
    function handleReactionBtnClicked(name) {
        dispatch(reactionAdded({ postId: id, reaction: name }))
        console.log(name);
    }
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {

        return (
            <button
                onClick={() => handleReactionBtnClicked(name)}
                key={name}
                type="button"
                className="muted-button reaction-button">
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return <div>{reactionButtons}</div>;

};
