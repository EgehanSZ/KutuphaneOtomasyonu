import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

const { Content } = Layout;

const AdminLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AdminSidebar />
      <Layout className="site-layout">
        <AdminHeader />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;