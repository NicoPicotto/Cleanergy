import React from 'react';
import { Stack, Text, Button, StackDivider } from '@chakra-ui/react';

const Archivos = ({ fecha, archivo, titulo }) => {
	const fechaFormateada = fecha.toDate().toLocaleDateString('es-ES');

	return (
		<Stack
			w='100%'
			fontFamily={'fonts.open'}
			padding={2}
			marginY={2}
			borderRadius={5}
			align='center'
			shadow='sm'
			bgColor='#FAF9F6'
			_hover={{shadow: "md"}}
			transition="0.2s"
		>
			<Stack direction='row' justify='space-between' w='100%' align='center'>
				<Stack>
					<Text as='b'>{titulo}</Text>
					<Text fontSize='sm' lineHeight="none">{fechaFormateada}</Text>
				</Stack>

				<Button
					colorScheme='green'
					as='a'
					href={archivo}
					download={fecha}
					target='_blank'
				>
					Visualizar Reporte
				</Button>
			</Stack>
		</Stack>
	);
};

export default Archivos;
