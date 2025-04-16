import React from 'react'
import NavNav from './navnav'
import Social from './social'

const FooterNav = () => {
	return (
		<div className="">
			<div className='flex py-[33px] px-[23px] bg-[#FBFBFB] flex-col md:flex-row min-h-[236px] justify-between'>
			<NavNav />
			<Social />
		</div>
		<div className="w-full bg-white h-[46px] text-[#3D3D3D] font-inter text-[14px] leading-[30px] flex justify-center items-center">
				<p>© 2025 GreenShop. All Rights Reserved.</p>
		</div>
		</div>
	)
}

export default FooterNav
