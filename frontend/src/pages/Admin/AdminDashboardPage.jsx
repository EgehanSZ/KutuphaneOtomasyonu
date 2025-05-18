import React from 'react';
import { Typography, Card, Row, Col } from 'antd';

const { Title } = Typography;

const AdminDashboardPage = () => {
  return (
    <div>
      <Title level={2}>Admin Paneli - Genel Bakış</Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Toplam Kitap Sayısı" bordered={false}>
            {/* Backend'den gelen toplam kitap sayısı */}
            1500
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Toplam Kullanıcı Sayısı" bordered={false}>
            {/* Backend'den gelen toplam kullanıcı sayısı */}
            500
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Ödünç Verilen Kitap Sayısı" bordered={false}>
            {/* Backend'den gelen ödünç verilen kitap sayısı */}
            320
          </Card>
        </Col>
      </Row>
      {/* Diğer istatistikler veya grafikler buraya eklenebilir */}
    </div>
  );
};

export default AdminDashboardPage;