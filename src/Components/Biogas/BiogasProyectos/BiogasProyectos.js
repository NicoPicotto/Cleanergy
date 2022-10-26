import React from 'react';
import { Divider, Heading, Flex, useMediaQuery } from '@chakra-ui/react';
import CardsBiogas from './CardsBiogas/CardsBiogas';

const BiogasProyectos = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	const proyectos = [
		{
			title: 'CTBG Gigena I',
			text: '[1 MW - Córdoba] Adjudicatarios de proyecto biogás. RenovAr Ronda 2 - Actualmente en operación comercial',
		},
		{
			title: 'CTBG Villa del Rosario',
			text: '[1 MW - Córdoba] Adjudicatarios de proyecto biogás. RenovAr Ronda 2 - Adjudicado y transferido previo al inicio de la construcción',
		},
		{
			title: 'CTBG Bell Ville',
			text: '[1,2 MW - Córdoba] Adjudicatarios de proyecto biogás. RenovAr Ronda 3 - Adjudicado y en proceso de diseño e ingeniería',
		},
		{
			title: 'Alimentos Magros',
			text: '[400 kW] Reingeniería, puesta en marcha, operación y logística en planta. En operación desde 2021',
		},
		{
			title: 'Desarrollos y prefactibilidades',
			text: '[50 MW] El equipo de CLEANERGY participó de la realización de diversos análisis técnicos, reportes de producción de energía (RPE), y estudios de prefactibilidad para una cartera de 20 proyectos distintos, en el marco del autoconsumo, el MATER y del Programa RenovAr.',
		},
	];

	return (
		<Flex
			justifyContent={'center'}
			alignItems={'center'}
			flexDir={'column'}
			overflowX={'hidden'}
		>
			<Flex w={'70vw'} padding={5} flexDir={'column'}>
				<Heading
					fontFamily={'fonts.open'}
					color={'brand.secundario'}
					padding={2}
					size={isMobile ? 'md' : 'lg'}
					textAlign={isMobile && 'center'}
				>
					Proyectos en Argentina
				</Heading>
				<Divider borderColor={'brand.terciario'} padding={2} />
			</Flex>

			<Flex
				align='center'
				justify='center'
				w={isMobile ? '90vw' : '70vw'}
				flexWrap={'wrap'}
				flexDir={isMobile && 'column'}
				marginBottom={10}
			>
				{proyectos.map((proy, key) => (
					<CardsBiogas title={proy.title} text={proy.text} key={key} />
				))}
			</Flex>
		</Flex>
	);
};

export default BiogasProyectos;
