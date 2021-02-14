/*
 * @Author: 田鑫
 * @Date: 2021-02-14 10:35:11
 * @LastEditTime: 2021-02-14 20:26:50
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))