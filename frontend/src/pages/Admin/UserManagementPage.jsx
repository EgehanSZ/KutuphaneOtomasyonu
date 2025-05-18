import React, { useState, useEffect } from 'react';
import { Typography, Table, Button, Modal, Form, Input } from 'antd';

const { Title } = Typography;

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const initialUsers = [
      { id: 1, username: 'kullanici1', email: 'kullanici1@example.com', role: 'user' },
      { id: 2, username: 'admin1', email: 'admin1@example.com', role: 'admin' },
    ];
    setUsers(initialUsers);
  }, []);

  const handleEditUser = (user) => {
    setEditingUser(user);
    form.setFieldsValue(user);
    setIsEditModalVisible(true);
  };

  const handleEditModalOk = () => {
    form.validateFields().then((values) => {
      setIsEditModalVisible(false);
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === editingUser.id ? { ...user, ...values } : user))
      );
      setEditingUser(null);
      form.resetFields();
    }).catch((info) => {
      console.log('Validation Failed:', info);
    });
  };

  const handleEditModalCancel = () => {
    setIsEditModalVisible(false);
    setEditingUser(null);
    form.resetFields();
  };

  const handleDeleteUser = (id) => {
    Modal.confirm({
      title: 'Kullanıcıyı Silmek İstediğinize Emin Misiniz?',
      content: `${users.find(user => user.id === id)?.username} adlı kullanıcı silinecektir.`,
      onOk() {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        console.log('Kullanıcı silindi:', id);
        // Burada backend'e silme isteği gönderebilirsin
      },
      onCancel() {
        console.log('Silme işlemi iptal edildi.');
      },
    });
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Kullanıcı Adı', dataIndex: 'username', key: 'username' },
    { title: 'E-posta', dataIndex: 'email', key: 'email' },
    { title: 'Rol', dataIndex: 'role', key: 'role' },
    {
      title: 'İşlemler',
      key: 'actions',
      render: (text, record) => (
        <span>
          <Button type="primary" size="small" onClick={() => handleEditUser(record)} style={{ marginRight: 8 }}>
            Düzenle
          </Button>
          <Button type="danger" size="small" onClick={() => handleDeleteUser(record.id)}>
            Sil
          </Button>
        </span>
      ),
    },
  ];

  return (
    <div>
      <Title level={2}>Kullanıcı Yönetimi</Title>
      <Table dataSource={users} columns={columns} rowKey="id" />

      <Modal
        title="Kullanıcıyı Düzenle"
        visible={isEditModalVisible}
        onOk={handleEditModalOk}
        onCancel={handleEditModalCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="username"
            label="Kullanıcı Adı"
            rules={[{ required: true, message: 'Lütfen kullanıcı adını girin!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-posta"
            rules={[{ required: true, message: 'Lütfen e-posta adresini girin!', type: 'email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="role"
            label="Rol"
            rules={[{ required: true, message: 'Lütfen kullanıcı rolünü seçin!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      {/* Kullanıcı ekleme butonu ve modal'ı buraya eklenebilir */}
    </div>
  );
};

export default UserManagementPage;