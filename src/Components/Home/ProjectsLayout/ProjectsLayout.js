import React from 'react';
import { Flex, useMediaQuery } from '@chakra-ui/react';
import ProjectsCard from './ProjectsCard/ProjectsCard';

const ProjectsLayout = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Flex
			alignItems={'flex-start'}
			justifyContent={'space-evenly'}
			flexWrap={'wrap'}
			padding={5}
			flexDir={isMobile && 'column'}
			id='services'
			scrollBehavior={'smooth'}
		>
			<ProjectsCard
				imageSrc={'/assets/home3c.jpg'}
				title='Proyecto 3C Biogás'
				text='Planta para autoconsumo de energía - 1,2 Mw.'
				goTo='/proyectos'
				altImg='Imagen de proyecto 3C Biogás'
			/>
			<ProjectsCard
				imageSrc={'/assets/homeam.jpg'}
				title='Proyecto Alimentos Magros'
				text='Planta para autoconsumo de energía - 400 Kw.'
				goTo='/proyectos'
				altImg='Imagen de alimentos magros'
			/>
		</Flex>
	);
};

export default ProjectsLayout;
