import React from 'react';
import { Card, Button } from 'antd';

const BorrowedBookCard = ({ book }) => {
  return (
    <Card
      title={book.baslik}
    >
      <p>Yazar: {book.yazar_ad}</p>
      <p>Stok Sayısı: {book.stok_adet}</p>
      <p>Yayınevi: {book.yayin_evi_ad}</p>
      <p>Sayfa Sayısı: {book.sayfa_sayisi}</p>


      <div style={{ marginTop: 16 }}>
        <Button>İade Et</Button>
        {/* Diğer işlemler (örneğin iade tarihini uzatma) için butonlar eklenebilir */}
      </div>
    </Card>
  );
};

export default BorrowedBookCard;