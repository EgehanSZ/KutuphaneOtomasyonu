import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { createKitap } from '../../api/kitapAPI.js';

const AddBookForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      // yazarlar için ad-soyad dizisi oluşturuyoruz
      // kullanıcıdan "Ahmet Yılmaz, Mehmet Demir" gibi bir string bekliyoruz
      const yazarlar = values.yazarlar.split(',').map((isimSoyisim) => {
        const [ad, ...soyadParts] = isimSoyisim.trim().split(' ');
        return { ad, soyad: soyadParts.join(' ') };
      });

      const kitap = {
        isbn: values.isbn,
        baslik: values.baslik,
        sayfa_sayisi: parseInt(values.sayfa_sayisi),
        stok_adet: parseInt(values.stok_adet),
        kategori_ad: values.kategori_ad,
        yayin_evi_ad: values.yayin_evi_ad,
        yazar_list: yazarlar,
      };

      await createKitap(kitap);
      message.success('Kitap başarıyla eklendi!');
      form.resetFields();
    } catch (error) {
      message.error('Kitap eklenirken bir hata oluştu!');
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Başlık"
        name="baslik"
        rules={[{ required: true, message: 'Lütfen kitap başlığını girin!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Yazarlar (Ad Soyad şeklinde, virgülle ayırın)"
        name="yazarlar"
        rules={[{ required: true, message: 'Lütfen yazar ad-soyadlarını girin!' }]}
        extra="Örnek: Ahmet Yılmaz, Mehmet Demir"
      >
        <Input placeholder="Ahmet Yılmaz, Mehmet Demir" />
      </Form.Item>

      <Form.Item
        label="ISBN"
        name="isbn"
        rules={[{ required: true, message: 'Lütfen ISBN numarasını girin!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Stok Adedi"
        name="stok_adet"
        rules={[{ required: true, message: 'Lütfen stok adedini girin!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Kategori Adı"
        name="kategori_ad"
        rules={[{ required: true, message: 'Lütfen kategori adını girin!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Yayınevi Adı"
        name="yayin_evi_ad"
        rules={[{ required: true, message: 'Lütfen yayınevi adını girin!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Sayfa Sayısı"
        name="sayfa_sayisi"
        rules={[{ required: true, message: 'Lütfen sayfa sayısını girin!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Kitap Ekle
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddBookForm;
