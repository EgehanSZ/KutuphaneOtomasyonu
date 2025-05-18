import React, { useState } from 'react';
import { Layout, Menu, Typography } from 'antd';
import { BookOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logo from '../../assets/logorgb.png'; // Logo dosyanı import et

const { Sider } = Layout;
const { Title } = Typography;

const AppSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div style={{ height: 64, margin: 16, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {collapsed ? (
          <img src={logo} alt="Logo" style={{ height: 70 }} />
        ) : (
          <>
            <img src={logo} alt="Logo" style={{ height: 52, marginRight: 8 }} />
            <Title level={4} style={{ color: '#fff', margin: 0 }}>Kütüphane-Otomasyon</Title>
          </>
        )}
      </div>

      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<BookOutlined />}>
          <Link to="/dashboard">Kitaplar</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/borrowed">Ödünç Aldıklarım</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AppSidebar;
