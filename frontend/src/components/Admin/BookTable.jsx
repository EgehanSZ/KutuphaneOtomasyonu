import React from 'react';
import { Table, Button } from 'antd';

const BookTable = ({ books, onEdit, onDelete }) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'isbn',
      key: 'id',
    },
    {
      title: 'Başlık',
      dataIndex: 'baslik',
      key: 'baslik',
    },
    {
      title: 'Yazar',
      dataIndex: 'yazar_ad',
      key: 'author',
    },
    {
      title: 'ISBN',
      dataIndex: 'isbn',
      key: 'isbn',
    },

    {
      title: 'Stok adedi',
      dataIndex: 'stok_adet',
      key: 'stok_adet',
    },
    {
      title: 'Sayfa Sayısı',
      dataIndex: 'sayfa_sayisi',
      key: 'sayfa_sayisi',
    },
    {
      title: 'Kategori',
      dataIndex: 'kategori_ad',
      key: 'kategori_id',
    },
    {
      title: 'Yayın Evi',
      dataIndex: 'yayin_evi_ad',
      key: 'yayin_evi',
    },
    {
      title: 'İşlemler',
      key: 'actions',
      render: (text, record) => (
        <span>
          <Button type="primary" size="small" onClick={() => onEdit(record)} style={{ marginRight: 8 }}>
            Düzenle
          </Button>
          <Button type="danger" size="small" onClick={() => onDelete(record.id)}>
            Sil
          </Button>
        </span>
      ),
    },
  ];

  return <Table dataSource={books} columns={columns} rowKey="id" />;
};

export default BookTable;