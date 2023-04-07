import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home';
import Nosotros from './views/nosotros';
import Biogas from './views/serviciosBiogas';
import Proyectos from './views/proyectos';
import Residuos from './views/serviciosResiduos';
import SolarFotovoltaico from './views/serviciosSolarFotovoltaico';
import Login from './views/login';
import SolarTermico from './views/serviciosSolarTermico';
import Footer from './Components/Footer/Footer';
import ScrolToTop from './Components/ScrollToTop/ScrollToTop';
import ClientDashboard from './views/clientDashboard';
import AdminDashboard from './views/adminDashboard';
import ErrorPage from './views/404';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import { ContextProvider } from './Context/Context';

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<ContextProvider>
				<Router>
					<ScrolToTop />
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/nosotros' element={<Nosotros />} />
						<Route path='/biogas' element={<Biogas />} />
						<Route path='/proyectos' element={<Proyectos />} />
						<Route path='/residuos' element={<Residuos />} />
						<Route path='/solarfotovoltaico' element={<SolarFotovoltaico />} />
						<Route path='/solartermico' element={<SolarTermico />} />
						<Route path='/login' element={<Login />} />
						<Route
							path='/usuario/:id'
							element={
								<ProtectedRoutes>
									<ClientDashboard />
								</ProtectedRoutes>
							}
						/>
						<Route
							path='/admin-clg'
							element={
								<ProtectedRoutes>
									<AdminDashboard />
								</ProtectedRoutes>
							}
						/>
						<Route path='*' element={<ErrorPage />} />
					</Routes>
					<Footer />
				</Router>
			</ContextProvider>
		</ChakraProvider>
	);
};

export default App;
