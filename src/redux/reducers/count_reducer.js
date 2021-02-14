/*
 * @Author: 田鑫
 * @Date: 2021-02-14 10:35:49
 * @LastEditTime: 2021-02-14 20:45:09
 */
import { INCREMENT, DECREMENT } from '../action_types';

let initState = 0;
export default function operateCount(preState = initState, action) {
  let { type, data } = action;
  // 在reducer中不能直接修改传递过来的参数
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