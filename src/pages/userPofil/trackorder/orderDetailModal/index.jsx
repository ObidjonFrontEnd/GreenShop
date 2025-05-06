import { Button, Divider, Modal, Typography } from 'antd'
import axios from 'axios'
import React from 'react'

const { Text, Title } = Typography

const DetailedOrderModal = ({ visible, onCancel, order }) => {
	const items = order?.shop_list || []
	const shipping = order?.extra_shop_info?.shipping_price || 0
	const total = order?.extra_shop_info?.total_price || 0
	const date = items[0]?.created_at || 'No data'
	
	
	const deleteOrder = async (id)=>{
		
		const respons = await axios.delete('https://green-shop-backend.onrender.com/api/order/delete-order?access_token=6803bab0f2a99d0247959f21' , {_id:id,})
		
	}
	

	return (
	
		<Modal
			open={visible}
			onCancel={onCancel}
			footer={[
				<Button key='cancel' onClick={onCancel}>
					Cancel
				</Button>,
				<Button key='delete' danger onClick={()=>{deleteOrder(order?._id)}}>
					Delete
				</Button>,
			]}
			width={600}
			title={<Title level={4}>Order Details</Title>}
		>
			<div className='space-y-2'>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-y-2'>
					<div>
						<Text className='text-gray-500'>Order Number</Text>
						<p className='font-semibold'>{order._id}</p>
					</div>
					<div>
						<Text className='text-gray-500'>Date</Text>
						<p className='font-semibold'>{date}</p>
					</div>
					<div>
						<Text className='text-gray-500'>Total</Text>
						<p className='font-semibold'>${total.toFixed(2)}</p>
					</div>
					<div>
						<Text className='text-gray-500'>Payment Method</Text>
						<p className='font-semibold'>Cash on Delivery</p>
					</div>
				</div>

				<Divider />

				<div>
					<Title level={5}>Items</Title>
					<div className='space-y-3 mt-2'>
						{items.map((item, idx) => (
							<div
								key={idx}
								className='flex justify-between items-center bg-gray-50 p-2 rounded'
							>
								<div className='flex items-center space-x-3'>
									<img
										src={item.main_image}
										alt={item.title}
										className='w-14 h-14 object-cover rounded-md border'
									/>
									<div>
										<p className='font-medium'>{item.title}</p>
										<p className='text-xs text-gray-500'>SKU: {item?._id}</p>
									</div>
								</div>
								<div className='text-right'>
									<p className='text-sm'>Qty: {item.count}</p>
									<p className='text-sm'>${item.price.toFixed(2)}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<Divider />

				<div className='flex justify-between'>
					<Text className='text-gray-500'>Shipping</Text>
					<Text className='text-green-600 font-semibold'>
						${shipping.toFixed(2)}
					</Text>
				</div>
				<div className='flex justify-between'>
					<Text className='text-gray-800 font-semibold'>Grand Total</Text>
					<Text className='text-green-600 font-semibold'>
						${total.toFixed(2)}
					</Text>
				</div>
			</div>
		</Modal>
	)
}

export default DetailedOrderModal
