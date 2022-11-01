import React from 'react';
import SectionLanding from '../Components/Landings/SectionsLanding/SectionsLanding';
import ProyectosSolarTermico from '../Components/SolarTermico/ProyectosSolarTermico';

const serviciosSolarTermico = () => {
	return (
		<>
			<SectionLanding
				title='Solar Térmico'
				bgImage={'/assets/serviceSolarPortada.webp'}
			/>
      <ProyectosSolarTermico />
		</>
	);
};

export default serviciosSolarTermico;
