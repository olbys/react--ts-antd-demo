import * as React from 'react';
import {Col, Layout, Row} from 'antd';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {MenuFoldOutlined, MenuUnfoldOutlined,} from '@ant-design/icons';

import NavbarComponent from './components/NavBarComponent/NavBarComponent';
import './App.css';
import SiderBarComponent from './components/SideBarComponent/SideBarComponent';
import RoutesPath from './routes'


const { Header, Sider, Content } = Layout;

class App extends React.Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (

      <BrowserRouter>
        <Layout>
          <Sider trigger={null} collapsible
            style={{
              overflow: 'auto',
              height: '100vh',
              //   position: 'fixed',
              // left: 0,
            }}

            collapsed={this.state.collapsed}>
            <SiderBarComponent></SiderBarComponent>

          </Sider>
       
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ paddingLeft: 25, }}>
              <Row>
                <Col span={2}>
                  {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.toggle,
                  })}
                </Col>
                <Col span={22}>
                  <NavbarComponent />
                </Col>
              </Row>


            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >

              <Switch>
                {RoutesPath.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.component />}
                  />
                ))}
              </Switch>

            </Content>

          </Layout>
        </Layout>
  
      </BrowserRouter>
    );
  }
}
export default App;
