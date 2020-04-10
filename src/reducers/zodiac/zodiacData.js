import zodiacData from '../../components/zodiacComponents/zodiacData'
const initialState= zodiacData.properties

export default function selectedZodiac(state= initialState, action){
    switch (action.type){
        case "SELECTED_ZODIAC":
            return action.selectedZodiac
            
        default:
            return state
    }
}