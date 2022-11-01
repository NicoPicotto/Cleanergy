import { Flex, useMediaQuery } from '@chakra-ui/react';
import ServiceCard from './ServiceCard/ServiceCard';

const CardLayout = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	const serv = [
		{
			imageSrc: '/assets/biogas.webp',
			title: 'Biogás',
			text: 'Ofrecemos soluciones y servicios end-to-end para productores agropecuarios, municipios, e inversores y desarrolladores privados',
			goTo: '/biogas',
			altImg: 'Imagen del servicio de Biogás',
		},
		{
			imageSrc: '/assets/solart.webp',
			title: 'Solar Térmico',
			text: 'Te brindamos diferentes alternativas para que aproveches la energía térmica para calentar fluidos, agua caliente sanitaria (ACS), piscinas, y calefacción de ambientes.',
			goTo: '/solartermico',
			altImg: 'Imagen del servicio de Solar Térmico',
		},
		{
			imageSrc: '/assets/solarfv.webp',
			title: 'Solar Fotovoltáico',
			text: 'Dimensionamiento e instalación de sistemas fotovoltaicos llave en mano, te asesoráramos para que puedas instalar tu sistema fotovoltaico de acuerdo a tus necesidades.',
			goTo: '/solarfotovoltaico',
			altImg: 'Imagen del servicio de Solar Fotovoltáico',
		},
		{
			imageSrc: 'assets/residuos.webp',
			title: 'Gestión de residuos',
			text: 'Ofrecemos un servicio integral de gestión de residuos orgánicos para grandes generadores de residuos y municipios.',
			goTo: '/residuos',
			altImg: 'Imagen del servicio de Gestión de Residuos',
		},
	];

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
			{serv.map((ser, key) => (
				<ServiceCard 
				imageSrc={ser.imageSrc}
				title={ser.title}
				text={ser.text}
				goTo={ser.goTo}
				altImg={ser.altImg}
				key={key}
				/>
			))}
		</Flex>
	);
};

export default CardLayout;