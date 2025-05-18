import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../../api/authAPI.js'
import backgroundImage from '../../assets/library-books.jpg';

const { Title } = Typography;

const RegisterPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const dataToSend = {
        isim: values.isim,
        soyisim: values.soyisim,
        eposta: values.eposta,
        telefon: values.telefon,
        parola: values.parola,
      };

      const response = await register(dataToSend);
      console.log('Kayıt başarılı:', response);

      navigate('/login');
    } catch (error) {
      console.error('Kayıt hatası:', error);

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
      {/* Arka plan resmi (blur) */}
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

      {/* Form kutusu */}
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
            maxWidth: '90vw',
          }}
        >
          <Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>
            Kütüphane Sistemi - Kayıt Ol
          </Title>
          <Form name="registerForm" onFinish={onFinish}>
            <Form.Item
              name="isim"
              rules={[{ required: true, message: 'Lütfen  adınızı girin!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Ad" />
            </Form.Item>
            <Form.Item
              name="soyisim"
              rules={[{ required: true, message: 'Lütfen soy adınızı girin!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Soyad" />
            </Form.Item>

            <Form.Item
              name="eposta"
              rules={[
                { required: true, message: 'Lütfen e-posta adresinizi girin!' },
                { type: 'email', message: 'Geçersiz e-posta formatı!' },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="E-posta" />
            </Form.Item>
            <Form.Item
              name="telefon"
              rules={[
                { required: true, message: 'Lütfen telefon numaranızı girin!' },
                {
                  pattern: /^[0-9\s+-]*$/,
                  message: 'Geçersiz telefon numarası formatı!',
                },
                { min: 10, message: 'Telefon numarası en az 10 haneli olmalıdır!' },
                { max: 15, message: 'Telefon numarası en fazla 15 haneli olabilir!' },
              ]}
            >
              <Input prefix={<PhoneOutlined />} placeholder="Telefon Numarası" />
            </Form.Item>

            <Form.Item
              name="parola"
              rules={[{ required: true, message: 'Lütfen şifrenizi girin!' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Şifre" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Kayıt Ol
              </Button>
              <div style={{ marginTop: 16, textAlign: 'center' }}>
                <a href="/login">Zaten hesabınız var mı? Giriş yapın!</a>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
