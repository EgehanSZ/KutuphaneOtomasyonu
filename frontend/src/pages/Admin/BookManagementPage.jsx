import React, { useState, useEffect } from 'react';
import { Typography, Button, Modal, message } from 'antd';
import BookTable from '../../components/Admin/BookTable';
import AddBookForm from '../../components/Admin/AddBookForm';
import EditBookForm from '../../components/Admin/EditBookForm';
import { getAllKitaplar } from '../../api/kitapAPI.js';

const { Title } = Typography;

const BookManagementPage = () => {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAllKitaplar();
        const formattedData = data.map((book) => ({
          ...book,
          kategori_ad: book.kategori.ad,
          yayin_evi_ad: book.yayin_evi.ad,
          yazar_ad: book.yazarlar.map(y => `${y.yazar.ad} ${y.yazar.soyad}`).join(', ')
        }));
        setBooks(formattedData);
      } catch (error) {
        console.error("Kitaplar alınırken hata oluştu:", error);
      }
    };

    fetchBooks();
  }, []);

  const showAddModal = () => setIsAddModalVisible(true);
  const handleAddCancel = () => setIsAddModalVisible(false);
  const handleEditCancel = () => {
    setIsEditModalVisible(false);
    setEditingBook(null);
  };

  const showEditModal = (book) => {
    setEditingBook(book);
    setIsEditModalVisible(true);
  };

  const handleAddOk = (values) => {
    console.log('Yeni Kitap:', values);
    setIsAddModalVisible(false);
    // Kitap eklendikten sonra kitapları yeniden çekebilirsin
  };

  const handleEditOk = (values) => {
    console.log('Düzenlenen Kitap:', values);
    setIsEditModalVisible(false);
    setEditingBook(null);
    // Kitap düzenlendikten sonra kitapları yeniden çekebilirsin
  };

  const handleDeleteBook = (id) => {
    console.log('Silinecek Kitap ID:', id);
    // Silme işlemi sonrası kitapları tekrar çekmeyi unutma
  };

  return (
    <div>
      <Title level={2}>Kitap Yönetimi</Title>
      <Button type="primary" onClick={showAddModal} style={{ marginBottom: 16 }}>
        Yeni Kitap Ekle
      </Button>
      <BookTable books={books} onEdit={showEditModal} onDelete={handleDeleteBook} />

      <Modal
        title="Yeni Kitap Ekle"
        open={isAddModalVisible}
        onOk={handleAddOk}
        onCancel={handleAddCancel}
      >
        <AddBookForm />
      </Modal>

      <Modal
        title="Kitap Düzenle"
        open={isEditModalVisible}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
      >
        {editingBook && <EditBookForm initialValues={editingBook} />}
      </Modal>
    </div>
  );
};

export default BookManagementPage;
