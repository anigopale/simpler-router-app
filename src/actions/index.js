import axios from 'axios';

const ROOT_URL=`https://jsonplaceholder.typicode.com`;

export function fetchPosts() {

  return function(dispatch) {
    axios.get(`${ROOT_URL}/posts`)
    .then(response => {
      console.log("promise resolved:",response.data);
      console.log("body:",response.data);
      dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
      });
    })
  }

}


export function fetchUsers() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/users`)
    .then(response => {
      dispatch({
        type: 'FETCH_USERS',
        payload: response.data
      })
    })
  }
}

export function showUser(id) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/users/${id}`)
    .then(response => {
      dispatch({
        type: 'FETCH_USER',
        payload: response.data
      })
    })
  }
}
