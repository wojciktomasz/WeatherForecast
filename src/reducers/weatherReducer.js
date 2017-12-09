/**
 * Created by Superstar on 08.12.2017.
 */
import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state]
        default:
            return state
    }
}