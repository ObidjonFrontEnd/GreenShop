import React from 'react'
import { useTranslation } from 'react-i18next'

const NavNav = () => {
		const { t } = useTranslation()
	
	return (
		<div className='flex font-inter gap-[70px] md:gap-[200px]'>
			<div className=''>
				<h2 className='text-[#3D3D3D] font-bold text-[18px] leading-[18px] mb-[8px]'>
					{t("MyAccount")}
				</h2>
			
				<p className='text-[#3D3D3D] text-[14px] leading-[30px]'> {t("Address")}</p>
				<p className='text-[#3D3D3D] text-[14px] leading-[30px]'> {t("Wishlist")}</p>
			</div>

			<div className=''>
				<h2 className='text-[#3D3D3D] font-bold text-[18px] leading-[18px] mb-[8px]'>
					{t("Categories")}
				</h2>
				<p className='text-[#3D3D3D] text-[14px] leading-[30px]'>
					{t("HousePlants")}
					 
				</p>
				<p className='text-[#3D3D3D] text-[14px] leading-[30px]'>
					{t("PotterPlants")}
					
				</p>
				<p className='text-[#3D3D3D] text-[14px] leading-[30px]'>
					{t("SeedsSmallPlants")}
				</p>

				<p className='text-[#3D3D3D] text-[14px] leading-[30px]'>
					{t("SeedsAccessories")}
					
				</p>
			</div>
		</div>
	)
}

export default NavNav
