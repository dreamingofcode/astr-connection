const initialState= null

export default function userImage (state= initialState, action){
    switch (action.type){
        case "FETCH_USER_IMAGE":
            return action.payload
            
        default:
            return state
    }
}