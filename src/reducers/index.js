/**
 * Created by Superstar on 08.12.2017.
 */
import { combineReducers } from 'redux'
import weatherReducer from './weatherReducer'

const rootReducer = combineReducers({
    weather: weatherReducer
})

export default rootReducer
