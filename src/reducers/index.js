import { combineReducers } from 'redux';
import Posts from './posts-reducer';
import Users from './users-reducer';
import User from './user-reducer';

const rootReducer = combineReducers({
  posts: Posts,
  users: Users,
  user: User
});

export default rootReducer;
