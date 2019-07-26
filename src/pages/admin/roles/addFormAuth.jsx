import React from 'react';
import {Input, Tree} from 'antd';
import { getMenu } from '../../../api/menu';
import config from '../../../config/index';
const { TreeNode } = Tree;

class AddFormAuth extends React.Component{
    constructor(props) {
        super(props);
        this.treeNodes = [];
        const { menu } = this.props.role;
        this.state = {
            checkedKeys: menu
        }
    }
    getData = async () => {
        const result = await getMenu();
        this.treeNodes = this.dealData(result);
    }
    // 处理menu菜单数据
    dealData = (list) => {
        return list.reduce((pre, item) => {
            pre.push(
                <TreeNode title={item.title} key={item.path}>
                    {item.children ? this.dealData(item.children):null}
                </TreeNode>
            )
            return pre
        }, [])
    }
    // 点击勾选框时触发的事件
    handleCheck = (checkedKeys) => {
        this.setState({
            checkedKeys
        })
        this.props.getCheckedKeys(checkedKeys);
    }
    // 当从父组件传递过来的值发生变化的时候
    componentWillReceiveProps(props) {
        this.setState({
            checkedKeys: props.role.menu
        })
    }
    componentWillMount() {
        this.treeNodes = this.dealData(config.menuList);
    }
    render() {
        const { name } = this.props.role;
        const { checkedKeys } = this.state;
        return (
            <div>
                {/* <Input defaultValue={name} disabled></Input> */}
                <p>角色：{name}</p>
                <Tree
                    checkable
                    checkedKeys={checkedKeys}
                    onCheck={this.handleCheck}
                    defaultExpandAll={true}
                >
                    {this.treeNodes}
                </Tree>
            </div>
        )
    }
}

export default AddFormAuth;
