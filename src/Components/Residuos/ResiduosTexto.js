import React from 'react';
import { Flex, Divider, Heading, useMediaQuery } from '@chakra-ui/react';
import VSensor from '../Animations/VSensor';

const ResiduosTexto = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

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
						Ofrecemos soluciones para generadores de residuos orgánicos y un
						servicio integral de gestión de residuos para municipios. Contactate
						con nosotros y te ayudamos a sumarte a las 4R (Reducir, Reutilizar,
						Reciclar y Recuperar energía).
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
						<VSensor text='Proveemos tecnología para recuperar cada corriente de residuos, inorgánicos y orgánicos.' />
						<VSensor text='Proveemos tecnología para recuperar la energía que contienen las diferentes corrientes de residuos.' />
						<VSensor text='Brindamos capacitaciones para una adecuada separación en origen (escuelas, industrias, instituciones, municipios).' />
						<VSensor text='Caracterización fisicoquímica de corrientes residuales para obtener su potencial energético.' />
						<VSensor text='Logística de residuos hasta el punto de revalorización más cercano.' />
						<VSensor text='Puntos limpios y revalorización energética de aceite vegetal usado.' />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ResiduosTexto;
