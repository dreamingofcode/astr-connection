
import {combineReducers} from 'redux'
import newUserData from './newUserData'
import userAuth from './userAuth'
import userData from './userData'
import isLoading from  './isLoading'
import userZodiac from './userZodiac'
import zodiacIsLoading from './zodiacIsLoading'
import zodiacData from './zodiac/zodiacData'
import selectedZodiac from './zodiac/selectedZodiac'
import selectedZoLoading from './zodiac/selectedZoLoading'
import horoscopeMatch from '../reducers/zodiac/horoscopeMatch'
const allReducers= combineReducers({
   newUserData: newUserData,
   userAuth: userAuth,
   userData: userData,
   userZodiac: userZodiac,
   zodiacIsLoading:zodiacIsLoading,
   zodiacData:zodiacData,
   selectedZodiac:selectedZodiac,
   horoscopeMatch:horoscopeMatch,
   isLoading: isLoading,
   // selectedZoLoading:selectedZoLoading
})
export default allReducers