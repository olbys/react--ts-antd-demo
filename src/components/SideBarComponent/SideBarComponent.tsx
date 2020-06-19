import * as React from 'react';
import {Menu} from 'antd';
import {NavLink} from 'react-router-dom';
import {UploadOutlined, UserOutlined,} from '@ant-design/icons';


class SiderBarComponent extends React.Component {


  render() {
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <NavLink to='/'> Transferts </NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<UploadOutlined />}>
            <NavLink to='/setting'>   Paramètres </NavLink>
          </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
                <NavLink to='/tagxperience'> TagXperience </NavLink>
            </Menu.Item>
        </Menu>
    );
  }
}
export default SiderBarComponent;
