import React from 'react';
import { Form, Input } from 'antd';

const EditBookForm = ({ initialValues }) => {
  return (
    <Form layout="vertical" initialValues={initialValues}>
      <Form.Item label="Başlık" name="title" rules={[{ required: true, message: 'Lütfen kitap başlığını girin!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Yazar" name="" rules={[{ required: true, message: 'Lütfen yazarın adını girin!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="ISBN" name="isbn" rules={[{ required: true, message: 'Lütfen ISBN numarasını girin!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Stok Adedi" name="stok_adet" rules={[{ required: true, message: 'Lütfen stok adedi girin!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Kategori Adı" name="kategori_ad" rules={[{ required: true, message: 'Lütfen kategori adı girin!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Yayınevi Adı" name="isbn" rules={[{ required: true, message: 'Lütfen yayınevi adı girin!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Sayfa Sayısı" name="isbn" rules={[{ required: true, message: 'Lütfen sayfa sayısını girin!' }]}>
        <Input />
      </Form.Item>
      
    </Form>
  );
};

export default EditBookForm;