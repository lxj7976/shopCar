import {combineReducers} from 'redux'
import numReducer from "./Num/reducer"
import carReducer from "./Car/reducer"
var reducer = combineReducers({
    num:numReducer,
    car:carReducer
})
export default reducer;