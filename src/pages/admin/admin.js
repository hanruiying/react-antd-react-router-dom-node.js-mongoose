import React from 'react';
import { Layout } from 'antd';
import './admin.less';
import MenuLeft from '../../components/menu-left';
import { Switch, Route } from 'react-router-dom';
import Home from './home/home';
import Line from './charts/line';
import Pie from './charts/pie';
import Product from './product/product';
import Catalog from './product/catalog';
import Role from './roles/role';
import User from './user/user';
import Header from '../../components/header';
import Wysiwyg from './ui/wysiwyg/index';
const { Footer, Sider, Content } = Layout;

class Admin extends React.Component{
    state = {
        collapsed: false
    }
    componentWillMount() {
        this.getClientWidth();
        window.onresize = () => {
            this.getClientWidth();
        }
    }
    getClientWidth = () => {
        const clientWidth = window.innerWidth;
        if (clientWidth < 992) {
            this.setState({
                collapsed: true
            })
        } else {
            this.setState({
                collapsed: false
            })
        }
    }
    handleClick = (data) => {
        this.setState({
            collapsed: data
        })
    }
    render () {
        return (
            <Layout className='leftWrapper'>
                <Sider
                className='leftAside'
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}>
                    <div className='leftTitle'>
                        <img src='https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg' />
                        <span>ANTD DESIGN</span>
                    </div>
                    <MenuLeft />
                </Sider>
                <Layout>
                    <Header handleClick={this.handleClick} collapsed={this.state.collapsed}></Header>
                    <Content>
                        <Switch>
                            <Route path='/admin/home' component={Home}></Route>
                            <Route path='/admin/line' component={Line}></Route>
                            <Route path='/admin/pie' component={Pie}></Route>
                            <Route path='/admin/product' component={Product}></Route>
                            <Route path='/admin/catalog' component={Catalog}></Route>
                            <Route path='/admin/role' component={Role}></Route>
                            <Route path='/admin/user' component={User}></Route>
                            <Route path='/admin/wysiwyg' component={Wysiwyg}></Route>
                        </Switch>
                    </Content>
                    <Footer>
                        Ant Design Admin 版权所有 © 2019 由 2900969126@qq.com 练习 搭建
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Admin;