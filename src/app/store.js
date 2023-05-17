import { configureStore } from '@reduxjs/toolkit';

import postReducer from '../features/posts/postsSlice';
import userReducer from '../features/users/usersSlice';
import notificationReducer from '../features/notifications/NotificationsSlice';



export default configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
    notifications: notificationReducer,
  },
});
