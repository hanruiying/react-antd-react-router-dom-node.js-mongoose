import React from 'react';
import { Table, Divider, Modal, Button, Input } from 'antd';

class Catalog extends React.Component{
    
    state = {
        visible: false,
        columns: [
            {
              title: '分类的名称',
              dataIndex: 'name',
              key: 'name'
            },
            {
              title: '操作',
              align: 'center',
              key: 'dowith',
              dataIndex: 'dowith',
              width: 300,
              render: (data) => (
                  <span>
                        <a onClick={() => this.openModel(data)}>修改分类</a>
                        <Divider type="vertical" />
                        <a href='javascript:;'>查看子分类</a>
                  </span>
              )
            }
        ],
        data: [
            {
                key: '1',
                name: '家用电器1'
            },
            {
                key: '2',
                name: '家用电器2'
            },
            {
                key: '3',
                name: '家用电器3'
            }
        ]
    }

    handleOk = () => {
        this.setState({
            visible: false
        })
    }

    handleCancel = () => {
        this.setState({
            visible: false
        })
    }

    openModel = (name) => {
        console.log(name)
        this.setState({
            visible: true
        })
    }
    
    render () {
        const { columns, data } = this.state
        return (
            <div>
                <Table columns={columns} dataSource={data} />
                <Modal
                title="更新分类"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                    <Input placeholder='请输入家用电器名称' />
                </Modal>
            </div>
        )
    }
}

export default Catalog;
