
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
import currentChatRoom from './chat/currentChat'
import currentChatUser from './chat/currentChatUser'
import users from './chat/users'
import usersLoading from './chat/usersLoading'
import currentlyViewing from './accounts/currentlyViewing'
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
   currentChatRoom:currentChatRoom,
   currentChatUser:currentChatUser,
   users:users,
   usersLoading: usersLoading,
   currentlyViewing:currentlyViewing
   // selectedZoLoading:selectedZoLoading
})
export default allReducers