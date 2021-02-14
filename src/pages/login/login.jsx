import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './css/login.less'
import logo from './images/logo.png';
const { Item } = Form;

export default class Login extends Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  
  render() {
    return (
      <div className='login'>
        <header>
          <img src={logo} alt="logo" />
          <h1>商品管理系统</h1>
        </header>
        <section>
          <h1>用户登录</h1>
          
          <Form
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            <Item
              name="username"
              validateFirst='false'
              rules={
                [
                  { required: true, message: '用户名不能为空!'},
                  { min: 4, message: '用户名必须大于等于4位!'},
                  { max: 12, message: '用户名必须小于等于12位!'},
                  { pattern: /^\w+$/, message: '用户名必须由字母、数字和下划线组成!' },
                ]
              }
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username" />
            </Item>

            <Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Item>

            <Item>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Item>

            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Item>
          </Form>
        </section>
      </div>
    )
  }
}