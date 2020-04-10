const initialState= []

export default function newUserData(state= initialState, action){
    switch (action.type){
        case "NEW_USER_DATA":
            return action.payload
            
        default:
            return state
    }
}