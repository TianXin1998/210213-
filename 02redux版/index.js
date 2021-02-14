/*
 * @Author: 田鑫
 * @Date: 2021-02-13 22:48:43
 * @LastEditTime: 2021-02-14 13:26:30
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import { subscribe} from 'redux';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <App store={ store }/>
  </React.StrictMode>,
  document.getElementById('root')
);

store.subscribe(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={ store }/>
    </React.StrictMode>,
    document.getElementById('root')
  );
})