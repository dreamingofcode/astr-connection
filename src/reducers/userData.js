const initialState = null;

export default function userData(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER_DATA':
      return action.userData;
    case 'NEW_POST':
      return {...state,posts:[...state.posts, action.payload]};
      case 'DELETE_POST':
        return {...state,posts: action.payload};
        case 'SET_USER_PROFILE_IMAGE':
        return {...state,proflie_image: action.payload};
    default:
      return state;
  }
}
