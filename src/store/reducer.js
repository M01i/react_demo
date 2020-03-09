import homeReducer from '../components/home/reducer'
import goodsReducer from '../components/goodslist/reducer'
import buyReducer from '../components/goods/reducer'
import {combineReducers} from 'redux';
var reducer = combineReducers({
    home:homeReducer,
    goodslist:goodsReducer,
    goods:buyReducer
})
export default reducer