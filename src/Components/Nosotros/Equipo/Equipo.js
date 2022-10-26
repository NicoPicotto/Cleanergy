import React from 'react';
import { Flex, Heading, Divider, useMediaQuery } from '@chakra-ui/react';
import CardsPersonales from './CardsPersonales/CardsPersonales';

const Equipo = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	const teamMembers = [
		{
			imageSrc: '/assets/teamJP.jpg',
			title: 'Juan Pablo Macagno',
			subtitle:
				'Licenciado en Biotecnología (UNR), PhD en Biotecnología (Universidad de Glasgow, Reino Unido)',
			text: 'Vasta experiencia en Medio Ambiente, investigación y desarrollo de procesos biotecnológicos y gestión de residuos sólidos urbanos (GIRSU).',
			altImg: 'Foto de Juan Pablo Macagno',
		},
		{
			imageSrc: '/assets/teamJuli.jpg',
			title: 'Julieta Oviedo',
			subtitle: 'Licenciada en Ambiente y Energías Renovables (UNVM).',
			text: 'Experiencia en diseño y desarrollo de proyectos solares fotovoltaicos de pequeña y mediana escala y en gestión de residuos orgánicos agroindustriales y operación de plantas de biogás.',
			altImg: 'Foto de Julieta Oviedo',
		},
		{
			imageSrc: '/assets/teamFlavio.jpg',
			title: 'Flavio Lepore',
			subtitle:
				'Ingeniero Mecánico (UNRC) y diplomado en gestión de activos y mantenimiento (UTN).',
			text: 'Experiencia en diseño y desarrollo de diferentes proyectos de ingeniería en industrias como la automotriz, medicina y metalmecánica. Experiencia en desarrollo de proyectos, gestión de mantenimiento y operación de plantas de biogás.',
			altImg: 'Foto de Flavio Lepore',
		},
		{
			imageSrc: '/assets/teamBullo.jpg',
			title: 'Nicolás Bullo',
			subtitle:
				'Estudiante avanzado de Ing. Agronómica en Facultad De Agronomía y Veterinaria (UNRC).',
			text: 'Se unió a Cleanergy para realizar su trabajo final de grado y desde entonces se encarga de realizar el asesoramiento técnico agronómico para la revalorización del Digestato.',
			altImg: 'Foto de Nicolas Bullo',
		},
		{
			imageSrc: '/assets/teamMarle.jpg',
			title: 'Marlene Martinez',
			subtitle:
				'Estudiante de la carrera Contador Publico Nacional en Universidad Nacional de Cuyo (Mendoza).',
			text: 'Dentro de Cleanergy Renovables S.A. realiza tareas administrativas.',
			altImg: 'Foto de Marlene Martinez',
		},
	];

	return (
		<Flex
			justifyContent={'center'}
			alignItems={'center'}
			flexDir={'column'}
			marginBottom={5}
		>
			<Flex w={isMobile ? '90vw' : '70vw'} padding={5} flexDir={'column'}>
				<Heading
					fontFamily={'fonts.open'}
					color={'brand.secundario'}
					padding={2}
					size={isMobile ? 'md' : 'lg'}
					textAlign={isMobile && 'center'}
				>
					Conocé el equipo
				</Heading>
				<Divider borderColor={'brand.terciario'} padding={2} />
			</Flex>
			<Flex
				justifyContent={'space-evenly'}
				alignItems={'center'}
				overflowX={'hidden'}
				marginBottom={5}
				flexDir={isMobile && 'column'}
				flexWrap={'wrap'}
				w={isMobile ? '90vw' : '70vw'}
			>
				{teamMembers.map((team, key) => (
					<CardsPersonales
						imageSrc={team.imageSrc}
						title={team.title}
						text={team.text}
						subtitle={team.subtitle}
						altImg={team.altImg}
						key={key}
					/>
				))}
			</Flex>
		</Flex>
	);
};

export default Equipo;
