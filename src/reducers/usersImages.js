const initialState= null

export default function usersImages (state= initialState, action){
    switch (action.type){
        case "FETCH_USERS_IMAGES":
            return action.payload
            
        default:
            return state
    }
}