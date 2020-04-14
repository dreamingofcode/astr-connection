

const initialState= ""

export default function currentlyViewing(state= initialState, action){

    switch (action.type){
        case "CURRENTLY_VIEWING_ACCOUNT":
            return action.payload
            
        default:
            return state
    }
}