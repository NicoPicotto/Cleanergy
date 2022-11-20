import React from 'react';
import BiogasTexto from '../Components/Biogas/BiogasTexto/BiogasTexto';
import SectionsLanding from '../Components/Landings/SectionsLanding/SectionsLanding';

const serviciosBiogas = () => {
	return (
		<>
			<SectionsLanding
				title='Biogás'
				bgImage={'/assets/serviceBiogasPortada.webp'}
			/>
			<BiogasTexto />
		</>
	);
};

export default serviciosBiogas;
