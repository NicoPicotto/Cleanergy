import React from 'react';
import SectionsLanding from '../Components/Landings/SectionsLanding/SectionsLanding';
import CardsProyectos from "../Components/Proyectos/CardsProyectos"

const proyectos = () => {
	return (
		<>
			<SectionsLanding
				title='Proyectos'
				bgImage={'/assets/serviceBiogasPortada.webp'}
			/>
			<CardsProyectos />
		</>
	);
};

export default proyectos;
