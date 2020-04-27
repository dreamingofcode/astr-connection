const initialState = null;

export default function userData(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER_DATA':
      return action.userData;
    case 'NEW_POST':
      return {...state,posts:[...state.posts, action.payload]};
      case 'DELETE_POST':
        return {...state,posts: action.payload};
    default:
      return state;
  }
}
