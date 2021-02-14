/*
 * @Author: 田鑫
 * @Date: 2021-02-14 13:30:06
 * @LastEditTime: 2021-02-14 13:42:17
 */
import { INCREMENT, DECREMENT } from './action_types';

export const increment = value => ({ type: INCREMENT, data: value })
export const decrement = value => ({ type: DECREMENT, data: value })