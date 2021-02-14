/*
 * @Author: 田鑫
 * @Date: 2021-02-13 22:48:34
 * @LastEditTime: 2021-02-14 13:38:29
 */
import React, { Component } from 'react';
import { increment, decrement } from './redux/action_creators'

export default class App extends Component {

  componentDidMount() {
    console.log(this.props.store.getState());
  }

  increment = () => {
    let { value } = this.refs.selectNumber;
    this.props.store.dispatch(increment(value * 1 ));
  }
  
  decrement = () => {
    let { value } = this.refs.selectNumber;
    this.props.store.dispatch(decrement(value * 1 ));
  }

  incrementIfOdd = () => {
    let { value } = this.refs.selectNumber;
    let count = this.props.store.getState();
    if (count % 2 === 1) {
      this.props.store.dispatch(increment(value * 1 ));
    }
  }

  incrementAsync = () => {
    let { value } = this.refs.selectNumber;
    setTimeout(() => {
      this.props.store.dispatch(increment(value * 1 ));
    }, 1000);
  }

  render() {
    let count = this.props.store.getState();
    return (
      <div>
        <h3>当前计数为{ count }</h3>
        <select ref='selectNumber'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>increment if odd</button>
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}