/*
 * @Author: 田鑫
 * @Date: 2021-02-14 10:35:49
 * @LastEditTime: 2021-02-14 13:45:37
 */
import { INCREMENT, DECREMENT } from './action_types';

let initState = 0;
export default function operateCount(preState = initState, action) {
  let { type, data } = action;
  let newState;
  switch (type) {
    case INCREMENT:
      newState = preState + data;
      return newState;
      break;
    case DECREMENT:
      newState = preState - data;
      return newState;
      break;
    default:
      break;
  }
  return preState;
}