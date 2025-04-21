import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './Components/Auth'

import MainLayout from './Layout/MainLayout'
import Address from './pages/userPofil/myProducts/addres'
import Home from './pages/Home/Home'
import MyProducts from './pages/userPofil/myProducts'
import TrackOrder from './pages/userPofil/trackorder'
import WishList from './pages/userPofil/wishlist'
import Profil from './pages/userPofil/Profil'

import UserPofil from './pages/userPofil'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<MainLayout />}>
						<Route path='/' element={<Home />} />
						<Route element={<UserPofil />}>
							<Route path='/profil'element={<Profil/>} />
							<Route path='/profil/myProducts' element={<MyProducts />} />
							<Route path='/profil/tracorder' element={<TrackOrder />} />
							<Route path='/profil/wishlist' element={<WishList />} />
							<Route path='/profil/address' element={<Address />} />
						</Route>
					</Route>
					<Route path='/auth' element={<Auth />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
