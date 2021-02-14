/*
 * @Author: 田鑫
 * @Date: 2021-02-13 15:14:56
 * @LastEditTime: 2021-02-13 16:52:06
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
