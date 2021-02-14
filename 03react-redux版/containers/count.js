/*
 * @Author: 田鑫
 * @Date: 2021-02-14 14:01:29
 * @LastEditTime: 2021-02-14 17:12:13
 */
import Count from '../components/count';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/action_creators';

// 完整版
// function mapStateToProps(state) {
//   return { count: state };
// }
// 简写版
// let mapStateToProps = state => ({ count: state });

// 完整版
// function mapDispatchToProps(dispatch) {
//   return {
//     increment: (value) => (dispatch(increment(value))),
//     decrement: (value) => (dispatch(decrement(value)))
//   };
// }
// 简写版
// let mapDispatchToProps = dispatch => ({
//   increment: (value) => (dispatch(increment(value))),
//   decrement: (value) => (dispatch(decrement(value)))
// })

// 完整版
// export default connect(mapStateToProps, mapDispatchToProps)(Count)
// 简写版
export default connect(
  state => ({ count: state }),
  {
    increment: increment,
    decrement: decrement
  }
)(Count)