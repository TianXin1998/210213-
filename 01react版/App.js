/*
 * @Author: 田鑫
 * @Date: 2021-02-13 22:48:34
 * @LastEditTime: 2021-02-14 10:29:11
 */
import React, {Component} from 'react';

export default class App extends Component {

  state = {
    count: 0
  }

  increment = () => {
    let { value } = this.refs.selectNumber;
    let { count } = this.state;
    this.setState({count: count + value*1})
  }
  
  decrement = () => {
    let { value } = this.refs.selectNumber;
    let { count } = this.state;
    this.setState({count: count - value*1})
  }

  incrementIfOdd = () => {
    let { value } = this.refs.selectNumber;
    let { count } = this.state;
    if (count % 2 === 1) {
      this.setState({count: count + value*1})
    }
  }

  incrementAsync = () => {
    let { value } = this.refs.selectNumber;
    let { count } = this.state;
    setTimeout(() => {
      this.setState({ count: count + value * 1 })
    }, 1000);
  }

  render() {
    let { count } = this.state;
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