/*
 * @Author: 田鑫
 * @Date: 2021-02-14 20:18:48
 * @LastEditTime: 2021-02-14 20:29:00
 */
import countReducer from './count_reducer';
import personReducer from './person_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  count: countReducer,
  person: personReducer
})