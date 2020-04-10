const initialState= true

export default function zodiacIsLoading (state= initialState, action){
    switch (action.type){
        case "FETCH_USER_ZODIAC":
            return false
            
        default:
            return state
    }
}