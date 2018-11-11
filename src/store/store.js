// 整个应用只能有一个store 
// Redux 提供createStore 这个函数来生成Store
// applyMiddleware 中间件执行异步操作
import {createStore, applyMiddleware} from 'redux'
// 还要引入 thunk
import thunk from 'redux-thunk'
import reducer from './reducer'
var store = createStore(reducer,applyMiddleware(thunk));
export default store;