
const initialState= null

export default function fetchMessages(state= initialState, action){

    switch (action.type){
        case "FETCH_MESSAGES":
            return action.payload
            
        default:
            return state
    }
}