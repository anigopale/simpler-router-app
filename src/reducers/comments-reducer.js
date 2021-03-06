export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_COMMENTS':
      return action.payload;
    break;
    case 'CLEAR_COMMENTS':
      return [];
    break;
  }
  return state;
}
