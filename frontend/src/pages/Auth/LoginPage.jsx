import React from 'react';
import { Form, Input, Button, Typography, message } from 'antd';  // message eklendi
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/authAPI.js';
import backgroundImage from '../../assets/library-books.jpg';
import logo from '../../assets/logorgb.png';

const { Title } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const eposta = values.eposta;   // let veya const olmalı
      const parola = values.password;

      const data = await login(eposta, parola);

      // Token'ı localStorage'a kaydet
      localStorage.setItem('token', data.token);

      message.success('Giriş başarılı!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Giriş hatası:', error);
      message.error('Giriş başarısız! Kullanıcı adı veya şifre yanlış.');
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          padding: 24,
        }}
      >
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            padding: 48,
            borderRadius: 8,
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.2)',
            width: 400,
            minHeight: 520,
            maxWidth: '90vw',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <img src={logo} alt="KOÜ Logo" style={{ width: 100, height: 100 }} />
          </div>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>
            Kütüphane Sistem Giriş
          </Title>
          <Form name="loginForm" onFinish={onFinish}>
            <Form.Item
              name="eposta"
              rules={[{ required: true, message: 'Lütfen e-posta adresini girin!' }]}
            >
              <Input prefix={<MailOutlined />} placeholder="E-posta" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Lütfen şifrenizi girin!' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Şifre" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Giriş
              </Button>
              <div style={{ marginTop: 16, textAlign: 'center' }}>
                <a href="/register">Kayıt Ol</a>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
