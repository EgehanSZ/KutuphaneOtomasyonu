import React from 'react';
import { Layout, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

// const navigate= useNavigate;
const { Header } = Layout;
const AppHeader = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log('Çıkış yapıldı');
    navigate('/login'); // Eğer React Router kullanıyorsan
  };

  return (
    <Header
      className="site-layout-background"
      style={{
        padding: '0 16px',
        background: '#fff',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Button icon={<LogoutOutlined />} onClick={handleLogout}>
        Çıkış
      </Button>
    </Header>
  );
};

export default AppHeader;