import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import AppSidebar from './Sidebar';
import AppHeader from './Header';

const { Content } = Layout;

const DashboardLayout = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <AppSidebar />
            <Layout className="site-layout">
                <AppHeader />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;