
import {combineReducers} from 'redux'
import newUserData from './newUserData'

const allReducers= combineReducers({
   newUserData: newUserData
})
export default allReducers