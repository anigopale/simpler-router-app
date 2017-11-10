import { combineReducers } from 'redux';
import Posts from './posts-reducer';
import Users from './users-reducer';
import User from './user-reducer';
import Comments from './comments-reducer';

const rootReducer = combineReducers({
  posts: Posts,
  users: Users,
  user: User,
  comments: Comments
});

export default rootReducer;
