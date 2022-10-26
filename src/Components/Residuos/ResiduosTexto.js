import React from 'react';
import {
	Flex,
	Divider,
	Heading,
	useMediaQuery,
	useColorMode,
} from '@chakra-ui/react';
import VSensor from '../Animations/VSensor';

const ResiduosTexto = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	const { colorMode } = useColorMode();

	return (
		<Flex justifyContent={'center'}>
			<Flex width={isMobile ? '90vw' : '70vw'} flexDir={'column'}>
				<Flex width={isMobile ? '90vw' : '70vw'} padding={5} flexDir={'column'}>
					<Heading
						fontFamily={'fonts.open'}
						color={'brand.secundario'}
						padding={2}
						size={isMobile ? 'md' : 'lg'}
						textAlign={isMobile && 'center'}
					>
						Ofrecemos un servicio integral de gestión de residuos orgánicos para
						grandes generadores de residuos y municipios.
					</Heading>
					<Divider borderColor={'brand.terciario'} padding={2} />
				</Flex>
				<Flex marginBottom={20}>
					<Divider
						orientation='vertical'
						marginTop={5}
						borderColor={'brand.secundario'}
					/>
					<Flex flexDir={'column'}>
						<VSensor text='Capacitaciones para una adecuada separación en origen (Industrias, instituciones, municipios).' />
						<VSensor text='Caracterización de corrientes residuales para obtener su potencial energético.' />
						<VSensor text='Logística de residuos hasta el punto de revalorización más cercano.' />
						<VSensor text='Reciclaje de aceite usado de cocina.' />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ResiduosTexto;
