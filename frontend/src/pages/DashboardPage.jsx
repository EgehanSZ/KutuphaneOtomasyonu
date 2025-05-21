import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Input } from 'antd';
import BookCard from '../components/BookCard';
import { getAllKitaplar } from '../api/kitapAPI';

const { Search } = Input;

const DashboardPage = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Veriyi çekme
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAllKitaplar();
        const formattedData = data.map((book) => ({
          ...book,
          kategori_ad: book.kategori?.ad || '',
          yayin_evi_ad: book.yayin_evi?.ad || '',
          yazar_ad: book.yazarlar?.map(y => `${y.yazar.ad} ${y.yazar.soyad}`).join(', ') || ''
        }));
        setBooks(formattedData);
        setFilteredBooks(formattedData); 
      } catch (error) {
        console.error("Kitaplar alınırken hata oluştu:", error);
      }
    };

    fetchBooks();
  }, []);

  
  useEffect(() => {
    const results = books.filter(book =>
      book.baslik.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.yazar_ad.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(results);
  }, [searchTerm, books]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div>
      <h2>Kitap Listesi</h2>
      <Search
        placeholder="Kitap veya yazar adı ile ara"
        onSearch={handleSearch}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <Row gutter={[16, 16]}>
        {filteredBooks.map(book => (
          <Col key={book.id} xs={24} sm={12} md={8} lg={6}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DashboardPage;
