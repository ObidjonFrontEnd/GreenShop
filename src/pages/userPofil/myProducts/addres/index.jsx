import React from 'react'

import { Input, Button, Select, Checkbox, Row, Col , Form } from 'antd';

const { Option } = Select;
const Address = () => {

	const onFinish = (values) => {
    console.log('Submitted values:', values)
  }
	return (
		<div className="p-4 sm:p-6 w-full mx-auto">
		<h2 className="text-lg font-semibold mb-2 text-black">Billing Address</h2>
		<p className="mb-6 text-black">
			The following addresses will be used on the checkout page by default.
		</p>

		<Form
			layout="vertical"
			onFinish={onFinish}
			className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
		>
			<Form.Item
				label={<span className="text-black">* First name</span>}
				name="firstName"
				rules={[{ required: true, message: 'Please enter your first name' }]}
			>
				<Input placeholder="First name" />
			</Form.Item>

			<Form.Item
				label={<span className="text-black">* Last name</span>}
				name="lastName"
				rules={[{ required: true, message: 'Please enter your last name' }]}
			>
				<Input placeholder="Last name" />
			</Form.Item>

			<Form.Item
				label={<span className="text-black">* Country / Region</span>}
				name="country"
				rules={[{ required: true, message: 'Please select a country' }]}
			>
				<Select placeholder="Select your country...">
					<Option value="uz">Uzbekistan</Option>
					<Option value="us">USA</Option>
				</Select>
			</Form.Item>

			<Form.Item
				label={<span className="text-black">* Town / City</span>}
				name="city"
				rules={[{ required: true, message: 'Please enter a city' }]}
			>
				<Input placeholder="Select your town..." />
			</Form.Item>

			<Form.Item
				label={<span className="text-black">* Street Address</span>}
				name="street"
				rules={[{ required: true, message: 'Please enter street address' }]}
			>
				<Input placeholder="House number and street name" />
			</Form.Item>

			<Form.Item
				label={<span className="text-black">Extra address</span>}
				name="extra"
			>
				<Input placeholder="Appartment, suite, unit, etc. (optional)" />
			</Form.Item>

			<Form.Item
				label={<span className="text-black">* State</span>}
				name="state"
				rules={[{ required: true, message: 'Please select a state' }]}
			>
				<Select placeholder="Select a state...">
					<Option value="tashkent">Tashkent</Option>
					<Option value="samarqand">Samarqand</Option>
				</Select>
			</Form.Item>

			<Form.Item
				label={<span className="text-black">* Zip</span>}
				name="zip"
				rules={[{ required: true, message: 'Please enter zip code' }]}
			>
				<Input placeholder="Zip code" />
			</Form.Item>

			<Form.Item
				label={<span className="text-black">* Email address</span>}
				name="email"
				rules={[{ required: true, type: 'email', message: 'Enter valid email' }]}
				className="md:col-span-2"
			>
				<Input placeholder="example@mail.com" />
			</Form.Item>


			<div className="flex flex-col sm:flex-row gap-2 md:col-span-2">
				<div className="flex-1 sm:max-w-[100px]">
					<label className="text-black block mb-1">Code</label>
					<Input defaultValue="+998" disabled />
				</div>
				<Form.Item
					label={<span className="text-black">* Phone Number</span>}
					name="phone"
					className="flex-1"
					rules={[{ required: true, message: 'Please enter phone number' }]}
				>
					<Input placeholder="Phone number" />
				</Form.Item>
			</div>

			<Form.Item className="md:col-span-2">
				<Button type="primary" htmlType="submit" className="bg-green-600 text-white w-full md:w-auto">
					Save Address
				</Button>
			</Form.Item>
		</Form>


		<div className="mt-10">
			<h2 className="text-black font-semibold">Shipping Address</h2>
			<p className="text-black">You have not set up this type of address yet.</p>
			<div className="mt-2 flex flex-wrap items-center gap-2">
				<Checkbox />
				<span className="text-black">Same as billing address</span>
				<Button type="link" className="text-green-600">Add</Button>
			</div>
		</div>
	</div>
	)
}

export default Address
