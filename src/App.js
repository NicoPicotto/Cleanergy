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
import SolarTermico from './views/serviciosSolarTermico';
import Footer from './Components/Footer/Footer';

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/nosotros' element={<Nosotros />} />
					<Route path='/biogas' element={<Biogas />} />
					<Route path='/proyectos' element={<Proyectos />} />
					<Route path='/residuos' element={<Residuos />} />
					<Route path='/solarfotovoltaico' element={<SolarFotovoltaico />} />
					<Route path='/solartermico' element={<SolarTermico />} />
				</Routes>
				<Footer />
			</Router>
		</ChakraProvider>
	);
};

export default App;
