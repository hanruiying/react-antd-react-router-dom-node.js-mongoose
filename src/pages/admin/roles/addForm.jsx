import React from 'react';
import { Form, Input, Icon } from 'antd';
class AddForm extends React.Component{
    // 调用父组件的方法给父组件传值
    Updataform = () => {
        this.props.setForm(this.props.form);
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form>
                <Form.Item label='角色名称' labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
                {getFieldDecorator('name', {
                    initialValue: '',
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                    onChange={this.Updataform}
                    placeholder="请输入角色名称"
                    />,
                )}
                </Form.Item>
            </Form>
        )
    }
}
export default Form.create()(AddForm)