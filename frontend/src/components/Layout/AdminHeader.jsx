import React from 'react';
import { Layout, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Admin çıkış yapıldı');
    navigate('/login'); // Admin çıkış yapınca giriş sayfasına yönlendirme
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
      {/* İstenirse admin kullanıcı bilgisi eklenebilir */}
    </Header>
  );
};

export default AdminHeader;