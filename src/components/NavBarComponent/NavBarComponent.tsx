import * as React from 'react';
import LeftMenuItem from './LeftMenuItem';
import {  } from 'antd';


class NavbarComponent extends React.Component {
  state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <LeftMenuItem></LeftMenuItem>
    );
  }
}
export default NavbarComponent;