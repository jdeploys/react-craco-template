import React, { ReactNode } from 'react';
import { Layout, Menu, Space } from 'antd';
import { AuthContainer } from '@/container/auth';
import { useHistory, useLocation } from 'react-router-dom';
import { RoutePath } from '@/component/router/types';
import { globalEnv } from '@/config/env';
import { LogoutOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const { isSignIn, signOut } = AuthContainer.useContainer();
  const year = new Date().getFullYear();
  const history = useHistory();
  const location = useLocation();
  const selectedPath = location.pathname
    ? `/${location.pathname.split('/')[1]}`
    : '/article';

  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      {isSignIn && (
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectedPath]}
            onClick={({ key }) => {
              history.push(String(key));
            }}
          >
            <Menu.Item key={RoutePath.Home}>Home</Menu.Item>
            <Menu.Item key={RoutePath.About}>About</Menu.Item>
            <Menu.Item
              key="/signOut"
              onClick={signOut}
              icon={<LogoutOutlined />}
            >
              Sign Out
            </Menu.Item>
          </Menu>
        </Header>
      )}

      <Content style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        {globalEnv.APP_NAME} ©{year} All right received.
      </Footer>
    </Layout>
  );
};

export { BaseLayout };
