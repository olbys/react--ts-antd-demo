import * as React from 'react';
import { Menu } from 'antd';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;

class LeftMenuItem extends React.Component {

  state = {
    current: 'mail',
  };

  handleClick = (e: any) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };


  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]}
        mode="horizontal"
        className='LeftMenuItem'
      >
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>

        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>

        <SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

      </Menu>
    );
  }
}

export default LeftMenuItem;