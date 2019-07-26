import React from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
// import './index.less';
import { getMenu } from '../../api/menu';
import config from '../../config';
const { SubMenu }  = Menu;

class MenuLeft extends React.Component {
  state = {
    MenuList: []
  }
  getMenuList = () => {
    getMenu().then(res => {
      // console.log(res, 'res');
      this.setState({
        MenuList: JSON.parse(JSON.stringify(res))
      })
    })
  }
  componentWillMount () {
    this.getMenuList();
  }
  getMenuNodes = (MenuList) => {
    return MenuList.map(item => {
      if (!item.children) {
        return (
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu
            key={item.path}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }>
              {this.getMenuNodes(item.children)}
            </SubMenu>
        )
      }
    })
  }
  render() {
    const path = this.props.location.pathname;
    const { MenuList } = this.state;
    return (
      <div className='MenuLeft'>
        <Menu
          theme='dark'
          selectedKeys={[path]}
          mode="inline"
          className='menu-bg'
          defaultOpenKeys={['/admin/ui', '/admin/pieline']}
        >
          {
            this.getMenuNodes(MenuList)
          }
        </Menu>
      </div>
    );
  }
}

export default withRouter(MenuLeft);
