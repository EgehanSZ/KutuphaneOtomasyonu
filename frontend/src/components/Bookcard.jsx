import React, { useState, useEffect } from 'react';
import { Card, Button, Tag, Modal, Form, DatePicker, message } from 'antd';
import { createOdunc } from '../api/oduncAPI';
import { jwtDecode } from "jwt-decode"


const BookCard = ({ book }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  


  const onFinish = async (values) => {
    try {
      const token = localStorage.getItem('token');
      const decoded = jwtDecode(token);
      console.log(decoded);
      const uye_id = decoded.uye_id;

      const odunc = {
        uye_id,
        isbn: book.isbn,
        odunc_tarihi: new Date().toISOString().split('T')[0],
        iade_tarihi: values.iade_tarihi.format('YYYY-MM-DD'),
      };
      console.log(book)
      console.log(odunc);

      await createOdunc(odunc);
      message.success('Kitap ödünç alındı!');
      form.resetFields();
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      message.error('Ödünç alma işlemi başarısız.');
    }
  };

  return (
    <>
      <Card
        title={book.baslik}
      >
        <p>Yazar: {book.yazar_ad}</p>
        <p>Stok Sayısı: {book.stok_adet}</p>
        <p>Yayınevi: {book.yayin_evi_ad}</p>
        <p>Sayfa Sayısı: {book.sayfa_sayisi}</p>

        
        {/* {book.stok_adet > 0 ? (
          <Tag color="green">Mevcut</Tag>
        ) : (
          <Tag color="red">Stokta Yok</Tag>
        )} */}
        <div style={{ marginTop: 16 }}>
          <Button
            type="primary"
            disabled={book.stok_adet === 0}
            onClick={showModal}
          >
            Ödünç Al
          </Button>
        </div>
      </Card>

      <Modal title="Teslim Tarihi Seç" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            label="İade (Teslim) Tarihi"
            name="iade_tarihi"
            rules={[{ required: true, message: 'İade tarihi zorunludur' }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Ödünç Al
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default BookCard;
