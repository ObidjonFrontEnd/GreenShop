import {
	EyeInvisibleOutlined,
	EyeOutlined,
	FacebookOutlined,
	GoogleOutlined,
} from '@ant-design/icons'
import { Form, Input, message } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import apiAxios from '../../../api/api'
import { closeModal } from '../../../redux/reduxers/authSlice'
import { useTranslation } from 'react-i18next'

const SignUp = () => {
	const [ , setShowPassword] = useState(false)
	const dispatch = useDispatch()
	const handleClickShowPassword = () => setShowPassword(show => !show)
	const { t } = useTranslation()

	const postData = async (email, password, name, surname) => {
		try {
			const response = await apiAxios.post(
				'/api/user/sign-up?access_token=6506e8bd6ec24be5de357927',
				{
					email,
					password,
					name,
					surname,
				}
			)
			localStorage.setItem('token', JSON.stringify(response.data.data.token))
			localStorage.setItem('name', JSON.stringify(response.data.data.user.name))
			localStorage.setItem(
				'surName',
				JSON.stringify(response.data.data.user.surname)
			)
			localStorage.setItem(
				'email',
				JSON.stringify(response.data.data.user.email)
			)
			dispatch(closeModal())

			return response.data
		} catch (error) {
			console.error(error)
			message.error('Sign-up failed!')
		}
	}

	const onFinish = values => {
		const { email, password, name, surname } = values
		postData(email, password, name, surname)
	}

	return (
		<Form
			name='sign-up'
			onFinish={onFinish}
			className='w-[300px] sm:w-[360px] mx-auto px-[10px]'
			layout='vertical'
		>
			<div className='font-inter text-[13px] leading-[16px] mb-[16px] text-[#3d3d3d] mt-[53px]'>
				<h2>{t("TitleRegister")}</h2>
			</div>

			<Form.Item
				label={t("Name")}
				name='name'
				rules={[{ required: true, message: 'Please input your name!' }]}
			>
				<Input placeholder={t("EnterYourFirstName")} className='h-[40px]' />
			</Form.Item>

			<Form.Item
				label={t("Surname")}
				name='surname'
				rules={[{ required: true, message: 'Please input your surname!' }]}
			>
				<Input placeholder={t("EnterYourSurname")} className='h-[40px]' />
			</Form.Item>

			<Form.Item
				label={t("Email")}
				name='email'
				rules={[
					{ required: true, message: 'Please input your email!' },
					{ type: 'email', message: 'Invalid email format!' },
				]}
			>
				<Input placeholder={t("EnterYourEmail")} className='h-[40px]' />
			</Form.Item>

			<Form.Item
				label={t("Password")}
				name='password'
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password
					placeholder={t("EnterYourPassword")}
					className='h-[40px]'
					iconRender={visible =>
						visible ? (
							<EyeInvisibleOutlined onClick={handleClickShowPassword} />
						) : (
							<EyeOutlined onClick={handleClickShowPassword} />
						)
					}
				/>
			</Form.Item>

			<Form.Item>
				<button className='h-[45px] w-full bg-[#46A358] font-inter font-bold text-[16px] leading-[16px] text-white rounded-[5px]'>
					{t("SignUp")}
				</button>
			</Form.Item>

			<div className='text-[#3d3d3d] text-[13px] leading-[16px] mb-[27px] font-inter flex items-center'>
				<div className='w-full bg-[#EAEAEA] h-[1px]'></div>
				<p className='text-nowrap px-[10px] bg-white'>{t("Orloginwith")}</p>
				<div className='w-full bg-[#EAEAEA] h-[1px]'></div>
			</div>

			<div className='end'>
				<div className='mb-[15px] w-full flex flex-col items-center'>
					<button
						type='button'
						className='h-[40px] gap-[10px] flex items-center'
					>
						<GoogleOutlined />
						{t("LoginWithGoogle")}
					</button>

					<button
						type='button'
						className='h-[40px] gap-[10px] flex items-center'
					>
						<FacebookOutlined />
						{t("LoginWithFacebook")}
					</button>
				</div>
			</div>
		</Form>
	)
}

export default SignUp
