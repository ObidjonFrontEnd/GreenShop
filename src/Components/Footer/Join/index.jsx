import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import { inputBaseClasses } from '@mui/material/InputBase'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Join = () => {
		const { t } = useTranslation()
	
	return (
		<div className='font-inter flex flex-col md:flex-row items-center gap-y-[30px] bg-[#FBFBFB] py-[32px] md:px-[23px] px-[15px]'>
			<Card sx={{ bgcolor: 'transparent' }}>
				<CardActionArea className=''>
					<div className='text-center px-[23px] pt-[25px]'>
						<img src='/join1.svg' alt='' />
					</div>
					<CardContent>
						<Typography
							gutterBottom
							variant='h5'
							component='div'
							sx={{
								color: '#3D3D3D',
								fontWeight: 700,
								fontSize: '17px',
								lineHeight: '16px',
								fontFamily: 'inter',
							}}
						>
							{t("GardenCare")}
						</Typography>
						<Typography variant='body2' sx={{ color: 'text.secondary' }}>
							{t("Lorem")}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>

			<Card sx={{ bgcolor: 'transparent' }}>
				<CardActionArea className=''>
					<div className='text-center px-[23px] pt-[25px]'>
						<img src='/join2.svg' alt='' />
					</div>
					<CardContent>
						<Typography
							gutterBottom
							variant='h5'
							component='div'
							sx={{
								color: '#3D3D3D',
								fontWeight: 700,
								fontSize: '17px',
								lineHeight: '16px',
								fontFamily: 'inter',
							}}
						>
							{t("PlantRenovation")}
						</Typography>
						<Typography variant='body2' sx={{ color: 'text.secondary' }}>
							{t("Lorem")}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>

			<Card sx={{ bgcolor: 'transparent' }}>
				<CardActionArea className=''>
					<div className='text-center px-[23px] pt-[25px]'>
						<img src='/join1.svg' alt='' />
					</div>
					<CardContent>
						<Typography
							gutterBottom
							variant='h5'
							component='div'
							sx={{
								color: '#3D3D3D',
								fontWeight: 700,
								fontSize: '17px',
								lineHeight: '16px',
								fontFamily: 'inter',
							}}
						>
							{t("WateringGraden")}
						</Typography>
						<Typography variant='body2' sx={{ color: 'text.secondary' }}>
							{t("Lorem")}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>

			<div className='card md:px-[15px] text-start'>
				<h2 className='text-[#3D3D3D] font-bold text-[18px] leading-[16px]'>
					{t("Join")}
				</h2>
				<div className='mt-[18px] flex justify-start'>
					<TextField
						id='standard-suffix-shrink'
						label={t("JoinInput")}
						variant='standard'
						color='white'
						slotProps={{
							htmlInput: {
								sx: { textAlign: 'left' },
							},
							input: {
								endAdornment: (
									<InputAdornment
										position='end'
										sx={{
											alignSelf: 'flex-end',
											margin: 0,
											paddingX: '10px',
											marginBottom: '5px',
											opacity: 0,
											pointerEvents: 'none',
											[`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
												opacity: 1,
											},
										}}
									>
										@gmail.com
									</InputAdornment>
								),
							},
						}}
					/>
					<Button variant='contained'>Join</Button>
				</div>
				<p className='text-[#727272] text-[13px] leading-[22px] font-inter mt-[17px]'>
					{t("Lorem2")}
				</p>
			</div>
		</div>
	)
}

export default Join
