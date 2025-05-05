import React from 'react'
import { Card, Typography, Row, Col } from 'antd'
import { Link } from 'react-router-dom'


const { Title, Text } = Typography

const orders = [
  {
    id: 'bee7e26c986a1d',
    date: 'Sat May 03 2025',
    total: '$1199.98',
  },
  {
    id: 'bee7e26c98744b',
    date: 'Sat May 03 2025',
    total: '$12',
  },
  {
    id: 'bee7e26c987a83',
    date: 'Sat May 03 2025',
    total: '$0',
  },
]


const TrackOrder = () => {
	return (
		<div className="p-4 sm:p-6 w-full mx-auto">
      <Title level={4} className="text-black">Track your Orders</Title>

      <div className="grid gap-4 mt-4">
        {orders.map((order) => (
          <Card
            key={order.id}
            className="rounded-lg shadow-sm border border-gray-200"
            bodyStyle={{ padding: '16px' }}
          >
            <Row gutter={[16, 16]} className="text-black">
              <Col xs={24} sm={12} md={6}>
                <Text className="block font-medium">Order Number</Text>
                <Text strong>{order.id}</Text>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Text className="block font-medium">Date</Text>
                <Text strong>{order.date}</Text>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Text className="block font-medium">Total</Text>
                <Text strong>{order.total}</Text>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Text className="block font-medium">More</Text>
                <Link to={`/orders/${order.id}`}>
                  <Text className="text-green-600">Get details</Text>
                </Link>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </div>
	)
}

export default TrackOrder
