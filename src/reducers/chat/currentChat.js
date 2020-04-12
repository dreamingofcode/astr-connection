

const initialState= ""

export default function currentChatRoom(state= initialState, action){

    switch (action.type){
        case "CURRENT_CHAT_ROOM":
            return action.payload
            
        default:
            return state
    }
}