
const initialState= ""

export default function horoscopeMatch(state= initialState, action){
    switch (action.type){
        case "HOROSCOPE_MATCH":
            return action.payload
            
        default:
            return state
    }
}