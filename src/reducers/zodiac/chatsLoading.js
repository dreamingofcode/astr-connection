const initialState= true

export default function ChatsLoading (state= initialState, action){
    switch (action.type){
        case "SELECTED_ZODIAC_BABY":
            return false
            
        default:
            return state
    }
}