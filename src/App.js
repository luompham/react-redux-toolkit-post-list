import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { PostList } from './features/posts/PostList';
import { AddPostForm } from './features/posts/AddPostForm';
import { SinglePostPage } from './features/posts/SinglePostPage';
import { EditPostForm } from './features/posts/EditPostForm';
import { UserList } from './features/users/UserList';
import { UserPage } from './features/users/UserPage';

import { Navbar } from './app/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddPostForm />
                <PostList />
              </>
            )}
          />
          <Route
            exact
            path="/posts/:postId"
            component={SinglePostPage} />
          <Route
            exact
            path="/editPost/:postId"
            component={EditPostForm} />
          <Route
            exact
            path="/users"
            component={UserList} />
          <Route
            exact
            path="/users/:userId"
            component={UserPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
