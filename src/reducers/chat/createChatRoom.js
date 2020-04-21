
const initialState= true

export default function currentChatRoom(state= initialState, action){

    switch (action.type){
        case "CREATE_CHAT_ROOM":
            return false
            
        default:
            return state
    }
}