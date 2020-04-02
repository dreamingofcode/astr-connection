const initialState= []

export default function newUserData(state= initialState, action){
    switch (action.type){
        case "NEW_USER_DETAILS":
            return action.newUserData
            
        default:
            return state
    }
}