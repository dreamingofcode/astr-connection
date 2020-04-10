import zodiacData from '../../components/zodiacComponents/zodiacData'
const initialState= zodiacData.properties[0]

export default function selectedZodiac(state= initialState, action){
    switch (action.type){
        case "SELECTED_ZODIAC":
            return action.selectedZodiac
            
        default:
            return state
    }
}