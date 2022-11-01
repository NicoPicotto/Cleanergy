import React from 'react';
import SectionsLanding from '../Components/Landings/SectionsLanding/SectionsLanding';
import Equipo from '../Components/Nosotros/Equipo/Equipo';
import NosotrosTexto from '../Components/Nosotros/NosotrosTexto/NosotrosTexto';

const nosotros = () => {
	return (
		<>
			<SectionsLanding title='Nosotros' bgImage={'/assets/about.webp'} />
			<NosotrosTexto />
			<Equipo />
		</>
	);
};

export default nosotros;
