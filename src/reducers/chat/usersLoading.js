const initialState= true

export default function isLoading (state= initialState, action){
    switch (action.type){
        case "FETCH_USERS":
            return false
            
        default:
            return state
    }
}