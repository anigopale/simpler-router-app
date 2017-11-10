import axios from 'axios';

const ROOT_URL=`https://jsonplaceholder.typicode.com`;

export function fetchPosts() {

  return function(dispatch) {
    axios.get(`${ROOT_URL}/posts`)
    .then(response => {
      console.log("promise resolved:",response.data);
      dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
      });
    })
  }

}
