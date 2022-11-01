import React from 'react';
import SectionLanding from '../Components/Landings/SectionsLanding/SectionsLanding';
import ProyectosSolarFotovoltaico from "../Components/SolarFotovoltaico/ProyectosSolarFotovoltaico"

const serviciosSolarFotovoltaico = () => {
	return (
		<>
			<SectionLanding
				title='Solar Fotovoltáico'
				bgImage={'/assets/serviceSolarFotovoltaicoPortada.webp'}
			/>
      <ProyectosSolarFotovoltaico />
		</>
	);
};

export default serviciosSolarFotovoltaico;
