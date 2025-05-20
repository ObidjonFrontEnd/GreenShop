import { Button, Input, Space } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const CardTotal = () => {
	const { t } = useTranslation()

	const nav = useNavigate()
	const carts = useSelector(state => state.shopping?.data || [])
	return (
		<div>
			<div className='flex items-center py-[20px] border-b-[1px] border-b-[#46A538] text-[16px] font-bold'>
				<h1>{t("CardTotal")}</h1>
			</div>
			<div className='py-[30px]'>
				<form action=''>
					<Space.Compact style={{ width: '100%' }}>
						<Input defaultValue='' />
						<Button type='primary'>{t("Apply")}</Button>
					</Space.Compact>
				</form>
				<div className="text-[#00000073] text-[14px] grid gap-[16px] mt-[16px]">
					<p >{t("Subtotal")} : <span className='text-black'>1</span></p>
					<p>{t("CouponDiscount")}: -<span className='text-black'>1</span></p>
					<p>{t("Shiping")}: <span className='text-black'>1</span></p>
					<p className='text-black text-[16px] font-bold flex w-full justify-between'>{t("Total")}: <span className='text-[#46A538]'>1</span></p>
					<button onClick={()=>{carts?.length ? nav('/product-checkout') : '' }} className='w-full py-[10px] bg-[#46A538] text-[#ffffff] text-[16px] font-bold rounded-[8px]'>{t("ProceedToCheckout")}</button>
					<button onClick={()=>{nav('/')}} className='text-[#46A538] w-full font-bold text-[16px]'>{t("ContinueShopping")}</button>

				</div>
			</div>
		</div>
	)
}

export default CardTotal
