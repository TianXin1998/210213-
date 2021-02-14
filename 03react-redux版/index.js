/*
 * @Author: 田鑫
 * @Date: 2021-02-13 22:48:43
 * @LastEditTime: 2021-02-14 14:17:54
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);