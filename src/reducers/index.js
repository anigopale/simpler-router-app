import { combineReducers } from 'redux';
import Posts from './posts-reducer';

const rootReducer = combineReducers({
  posts: Posts
});

export default rootReducer;
