import React, { useState } from 'react';
import { Layout, Menu, Typography } from 'antd';
import { DashboardOutlined, BookOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logo from '../../assets/logorgb.png';

const { Sider } = Layout;
const { Title } = Typography;

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          height: 64,
          margin: 16,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {collapsed ? (
          // Kapalıysa küçük logo veya simge
          <img src={logo} alt="Logo" style={{ height: 70 }} />
        ) : (
          // Açıkken büyük logo veya yazı
          <>
            <img src={logo} alt="Logo" style={{ height: 42, marginRight: 8 }} />
            <Title level={4} style={{ color: '#fff', margin: 0 }}>Admin Paneli</Title>
          </>
        )}
      </div>

      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/admin">Genel Bakış</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<BookOutlined />}>
          <Link to="/admin/books">Kitap Yönetimi</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to="/admin/users">Kullanıcı Yönetimi</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AdminSidebar;
