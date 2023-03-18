import React from 'react';
import { Stack, Text, Button, StackDivider } from '@chakra-ui/react';

const Archivos = ({ fecha, archivo }) => {

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
		>
			<Stack direction='row' justify='space-between' w='100%' align='center'>
				<Text
					as='b'
				>
				Reporte {fechaFormateada}
				</Text>
				<Button colorScheme='green' as="a" href={archivo} download={fecha} target="_blank">
					Visualizar Reporte
				</Button>
			</Stack>
		</Stack>
	);
};

export default Archivos;
