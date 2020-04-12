
const initialState= ""

export default function currentChatUser(state= initialState, action){

    switch (action.type){
        case "CURRENT_CHAT_USER":
            return action.payload
            
        default:
            return state
    }
}