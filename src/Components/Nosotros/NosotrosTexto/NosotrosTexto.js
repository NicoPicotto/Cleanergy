import React from 'react';
import { Flex, Heading, Text, Divider, useMediaQuery } from '@chakra-ui/react';

const NosotrosTexto = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

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
					color={'brand.primario'}
					padding={2}
					size={isMobile ? 'md' : 'lg'}
					textAlign={isMobile && 'center'}
				>
					Cleanergy Renovables SA
				</Heading>
				<Divider borderColor={'brand.terciario'} padding={2} />
			</Flex>
			<Text
				w={isMobile ? '90vw' : '70vw'}
				padding={5}
				fontFamily={'fonts.open'}
			>
				La empresa nace en 2016 con la misión de crear economías circulares,
				ayudando a generar valor a municipios, industrias y la comunidad
				mediante sistemas de generación de energía a partir de residuos
				orgánicos. Creemos que la incorporación de nuevas tecnologías a los
				emprendimientos productivos, especialmente en la industria
				agroalimentaria, cambiará la manera de hacer negocios en Argentina y la
				región, adoptando prácticas más eficientes, y a la vez más sustentables.
				Es por eso que trabajamos junto a productores agropecuarios e
				industriales para aprovechar un recurso valioso, que hoy está
				desaprovechado, generando negocios más rentables, con menor riesgo, y
				amigables con el medio ambiente y la comunidad en la que trabaja.
			</Text>
		</Flex>
	);
};

export default NosotrosTexto;
