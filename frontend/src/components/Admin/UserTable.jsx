import React from 'react';
import { Table, Button } from 'antd';

const UserTable = ({ users, onEdit, onDelete }) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Kullanıcı Adı',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'E-posta',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Rol',
      dataIndex: 'role',
      key: 'role',
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

  return <Table dataSource={users} columns={columns} rowKey="id" />;
};

export default UserTable;