
const initialState= ''

export default function messageBoard(state= initialState, action){

    switch (action.type){
        case "CURRENT_MESSAGE_BOARD":
            return action.payload
            
        default:
            return state
    }
}