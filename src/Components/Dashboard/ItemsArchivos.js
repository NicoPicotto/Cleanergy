import React from 'react';
import { Stack, Text, Button, StackDivider, useColorMode } from '@chakra-ui/react';

const ItemsArchivos = ({ id, titulo, handleDelete, archivo, fecha }) => {

    const dateFormat = new Date(fecha).toLocaleDateString("es-ES")
	const { colorMode } = useColorMode();

	return (
		<Stack
			shadow='sm'
			bgColor={colorMode === 'dark' ? '#1a202c' : '#FAF9F6'}
			w='100%'
			padding={2}
			borderRadius={5}
			direction='row'
			borderColor={colorMode === 'dark' && 'brand.secundario'}
			borderWidth={colorMode === 'dark' && 1}
			align='center'
			justify='space-between'
			marginBottom={2}
		>
			<Stack direction="row" divider={<StackDivider />}>
				<Text fontSize='sm' as="b" textOverflow='ellipsis'
						overflow='hidden'>
					{titulo}
				</Text>
				<Text fontSize='sm' textOverflow='ellipsis'
						overflow='hidden'>
					{dateFormat}
				</Text>
			</Stack>
			<Stack direction='row'>
				<Button
					as='a'
					target='_blank'
					href={archivo}
					colorScheme='green'
					size='xs'
				>
					Abrir
				</Button>
				<Button
					colorScheme='red'
					size='xs'
					onClick={() => handleDelete(id)}
				>
					Eliminar
				</Button>
			</Stack>
		</Stack>
	);
};

export default ItemsArchivos;
