import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import BorrowedBookCard from '../components/BorrowedBooksCard';
import { getOduncById } from '../api/oduncAPI.js';
import { jwtDecode } from "jwt-decode"


const BorrowedBooksPage = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [books, setBooks] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem('token');
        const decoded = jwtDecode(token);
        const uye_id = decoded.uye_id;
        const data = await getOduncById(uye_id);

        setBorrowedBooks(data);
      } catch (error) {
        console.error('Kitaplar alınırken hata:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Ödünç Aldığım Kitaplar</h2>
      <Row gutter={[16, 16]}>
        {borrowedBooks.map(book => (
          <Col key={book.id} xs={24} sm={12} md={8} lg={6}>
            <BorrowedBookCard book={book} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BorrowedBooksPage;
