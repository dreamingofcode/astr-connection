

const initialState= ""

export default function filteredUsers(state= initialState, action){

    switch (action.type){
        case "FILTERED_USERS":
            return action.payload
            
        default:
            return state
    }
}