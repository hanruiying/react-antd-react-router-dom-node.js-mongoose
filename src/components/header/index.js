import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Dropdown, Icon, Breadcrumb, Tooltip } from 'antd';
import { parseTime } from '../../utils';
import { Link } from 'react-router-dom';
import screenfull from 'screenfull';
// import { getMenu } from '../../api/menu';
import config from '../../config';
import './index.less';
const menu = (
    <Menu>
      <Menu.Item>
        <span>个人中心</span>
      </Menu.Item>
      <Menu.Item>
        <Link to='/'>退出登陆</Link>
      </Menu.Item>
    </Menu>
);
class Header extends React.Component{
    state = {
        currentTime: parseTime(Date.now())
    }
    getTitle = () => {
        const path = this.props.location.pathname;
        var menuList = [];
        // var title1 = '';
        var title1 = [];
        // menuList = await getMenu();
        menuList = config.menuList;
        // getMenu().then(res => {
            // menuList = res;
        menuList.forEach(item => {
            if (item.path === path) {
                // title1 = item.title;
                title1.push(item.title);
            } else if (item.children) {
                const cItem = item.children.find(item2 => item2.path === path)
                if (cItem) {
                    title1.push(item.title);
                    title1.push(cItem.title);
                    // title1 = cItem.title
                }
            }
        });
        return title1;
        // });
    }
    componentWillMount () {
        setInterval(() => {
            this.setState({
                currentTime: parseTime(Date.now())
            })
        }, 1000)
    }
    toggle = () => {
        let collapsed = !this.props.collapsed;
        this.props.handleClick(collapsed);
    }
    screenFull = () => {
        if (screenfull.enabled) {
            screenfull.request();
        }
    }
    render () {
        const { currentTime } = this.state
        const title = this.getTitle();
        return (
            <div className='header'>
                <Icon
                className="trigger"
                type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
                className='icon-collapsed'
                />
                <Tooltip title="全屏">
                <Icon type="arrows-alt" onClick={this.screenFull} style={{color: '#333'}}/>
                </Tooltip>
                {/* <span className='headerTitle'>{title}</span> */}
                <Breadcrumb className='headerTitle'>
                    {
                        title.map(item => {
                            return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item> 
                        })
                    }
                </Breadcrumb>
                <span className='currentTime'>{currentTime}</span>
                <span className='usersetting'>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        <img src='https://i.loli.net/2019/04/04/5ca5b971e1548.jpeg'/>
                        <Icon type="caret-down" />
                    </a>
                </Dropdown>
                </span>
            </div>
        )
    }
}

export default withRouter(Header);
