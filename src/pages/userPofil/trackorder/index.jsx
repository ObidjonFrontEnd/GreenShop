import React, { useState } from 'react';
import { Card, Typography, Row, Col, Spin } from 'antd';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import DetailedOrderModal from './orderDetailModal'


const { Title, Text } = Typography;

const TrackOrder = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchOrders = async () => {
    const response = await axios.get(
      `https://green-shop-backend.onrender.com/api/order/get-order?access_token=6803bab0f2a99d0247959f21`
    );
    return response.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: fetchOrders,
  });

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedOrder(null);
  };

  return (
    <div className="p-4 sm:p-6 w-full mx-auto">
      <Title level={4} className="text-black">Track Your Orders</Title>

      {isLoading ? (
        <div className="flex justify-center mt-10">
          <Spin size="large" />
        </div>
      ) : (
        <div className="grid gap-4 mt-4">
          {data?.data?.map((order) => (
            <Card
              key={order?._id}
              className="rounded-lg shadow-sm border border-gray-200"
              bodyStyle={{ padding: '16px' }}
            >
              <Row gutter={[16, 16]} className="text-black">
                <Col xs={24} sm={12} md={6}>
                  <Text className="block font-medium">Order Number</Text>
                  <Text strong>{order?._id}</Text>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Text className="block font-medium">Date</Text>
                  <Text strong>{order?.shop_list[0]?.created_at}</Text>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Text className="block font-medium">Total</Text>
                  <Text strong>${order?.extra_shop_info?.total_price}</Text>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Text className="block font-medium">Details</Text>
                  <Text
                    className="text-green-600 cursor-pointer"
                    onClick={() => handleOpenModal(order)}
                  >
                    View
                  </Text>
                </Col>
              </Row>
            </Card>
          ))}

          {selectedOrder && (
            <DetailedOrderModal
              visible={modalVisible}
              onCancel={handleCloseModal}
              order={selectedOrder}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
