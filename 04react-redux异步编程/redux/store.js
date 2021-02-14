/*
 * @Author: 田鑫
 * @Date: 2021-02-14 10:35:11
 * @LastEditTime: 2021-02-14 19:59:34
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))