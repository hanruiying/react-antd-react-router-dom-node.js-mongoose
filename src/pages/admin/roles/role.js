import React from 'react';
import { Card, Button, Table, Modal, message } from 'antd';
import { role, roleAdd } from '../../../api/user';
import AddForm from './addForm';
import AddFormAuth from './addFormAuth';
import { parseTime } from '../../../utils/index';
import { roleUpdate } from '../../../api/user';

class Role extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            roles: [],
            role: {},
            form: null,
            visible: false,
            visible_auth: false
        }
        this.CheckedKeys = [];
    }
    initColumn = () => {
        this.column = [
            {
              title: '角色名称',
              dataIndex: 'name'
            },
            {
              title: '创建时间',
              dataIndex: 'time',
            },
            {
              title: '授权时间',
              dataIndex: 'auth_time',
            },
            {
                title: '授权人',
                dataIndex: 'auth_name',
            }
        ]
    }
    // 点击每一行的事件
    onRow = (row) => {
        return {
            onClick: event => {
                // 点击行获取到点击的角色
                this.setState({
                    role: row
                })
            }
        }
    }
    showAddRole = () => {
        this.setState({
            visible: true
        })
    }
    showAddAuth = () => {
        this.setState({
            visible_auth: true
        })
    }
    // 新增角色点击的ok按钮
    handleOk = () => {
        this.state.form.validateFields(async (error, values) => {
            if (!error) {
                var form1 = Object.assign({}, values, {time: new Date, auth_time: new Date, auth_name: '韩小妹'})
                const result = await roleAdd(form1);
                message.info(result.msg);
                this.getRole();
                this.setState({
                    visible: false
                })
            }
        })
    }
    // 权限弹框点击ok的按钮
    handleOkAuth = async () => {
        const result = await roleUpdate(Object.assign({}, { _id: this.state.role._id }, { menu: this.CheckedKeys }));
        message.info(result.msg);
        this.getRole();
        this.setState({
            visible_auth: false
        })
    }
    // 获取后台返回的角色列表数据
    getRole = () => {
        role().then(res => {
            for (let i in res) {
                res[i].time = parseTime(res[i].time);
                res[i].auth_time = parseTime(res[i].auth_time);
            }
            this.setState({
                roles: res
            })
        }).catch(err => {
            console.log(err, 'err');
        })
    }
    // 获取子组件传过来的input框中的name值
    setForm = (form) => {
        this.setState({
            form
        })
    }
    // 获取子组件勾选的key值
    getCheckedKeys = (CheckedKeys) => {
        this.CheckedKeys = CheckedKeys;
    }
    componentWillMount() {
        this.initColumn();
    }
    componentDidMount() {
        this.getRole();
    }
    render () {
        const { roles, role, form } = this.state;
        const title = (
            <div>
                <Button type='primary' style={{marginRight: 20}} onClick={this.showAddRole}>创建角色</Button>
                <Button type='primary' disabled={!role._id} onClick={this.showAddAuth}>设置角色权限</Button>
            </div>
        )
        // const isDisabled = true
        return (
            <Card title={title} bordered={false}>
                <Table
                rowKey='_id'
                onRow={this.onRow}
                pagination = {{pageSize: 5}}
                rowSelection={{type: 'radio', selectedRowKeys: [role._id]}}
                columns={this.column} dataSource={roles} />
                <Modal
                title="新增角色"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={() => {
                    this.setState({
                        visible: false
                    });
                    // form.resetFields();
                }}
                >
                    <AddForm setForm={this.setForm}/>
                </Modal>
                <Modal
                title="菜单权限"
                visible={this.state.visible_auth}
                onOk={this.handleOkAuth}
                onCancel={() => {
                    this.setState({
                        visible_auth: false
                    });
                }}
                >
                    <AddFormAuth role={role} getCheckedKeys={this.getCheckedKeys}/>
                </Modal>
            </Card>
        )
    }
}

export default Role;
