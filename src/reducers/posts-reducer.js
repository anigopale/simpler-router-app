import _ from 'lodash';

export default function(state=[], action) {
  console.log("inside posts-reducer", action.payload);
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
  }
  return state;
}
