const initialState= null

export default function userZodiac(state= initialState, action){
    switch (action.type){
        case "FETCH_USER_ZODIAC":
            return action.userZodiac
            
        default:
            return state
    }
}