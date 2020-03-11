import React, {Component} from 'react'
import './index.styl'

import adminService from '@/service/admin.js'
import { withRouter } from 'react-router-dom'

import { Form, Icon, Input, Button, Checkbox } from 'antd';

import store from '@/store'

class AdminLogin extends Component{
  constructor(props){
    super(props)
    console.log(store.getState())
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        adminService.userLogin(values.username, values.password)
          .then((data)=>{
            window.localStorage.setItem('token', data.token)
            store.dispatch({
              type: 'Login'
            })
            this.props.history.push('/admin/write')
        })
      }
    });
  };
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='v-admin-login'>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <Button type="primary" htmlType="submit" className="login-form-button">
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(AdminLogin);
export default withRouter(WrappedNormalLoginForm)