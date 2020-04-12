
const initialState= ""

export default function users(state= initialState, action){

    switch (action.type){
        case "FETCH_USERS":
            return action.payload
            
        default:
            return state
    }
}