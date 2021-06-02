import {combineReducers} from 'redux'
import AuthuserReducer from './Auth/AuthuserReducer'


var RootReducer = combineReducers({
   auth:AuthuserReducer,
})

export default RootReducer