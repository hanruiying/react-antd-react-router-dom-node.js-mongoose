import React from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import './login.less';
import { login } from '../../api/login.js';
import axios from 'axios';

class Login extends React.Component{
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const result = await login(values);
                if (result.msg) {
                    message.error(result.msg);
                } else {
                    this.props.history.push('/admin/home');
                }
            }
        })
    }
    // 自定义检验规则的编写
    validatePwd = (rule, value, callback) => {
        if (!value) {
            callback('请输入密码!')
        } else if (value.length < 4) {
            callback('密码长度不能小于4')
        } else if (value.length > 12 ) {
            callback('密码长度不能大于12')
        }
        callback();
    }
	render () {
        const { getFieldDecorator } = this.props.form;
		return (
			<div className='login-wrapper'>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <h1>ANT DESIGN 后台管理系统</h1>
                    <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [
                            { required: true, message: '请输入用户名!' },
                            { min: 4, message: '用户名至少4位'},
                            { max: 12, message: '用户名最多12位'},
                            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成'}
                        ],
                        })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}}/>} 
                        placeholder="请输入用户名"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                              validator: this.validatePwd,
                            },
                          ]
                        })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password"
                            placeholder="请输入密码"
                        />
                    )}
                    </Form.Item>
                    <Form.Item className='login-btn'>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    </Form.Item>
                    <Form.Item className='system-admin'>
                        <p>用户名：admin&nbsp;&nbsp;&nbsp;&nbsp;密码：admin</p>
                    </Form.Item>
                </Form>
			</div>
		)
	}
}
// 得到具有强大功能的form
const WrapLogin = Form.create()(Login); 
export default WrapLogin;