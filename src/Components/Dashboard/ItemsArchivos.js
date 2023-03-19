import React from 'react';
import { Stack, Text, Button, StackDivider } from '@chakra-ui/react';

const ItemsArchivos = ({ id, titulo, handleDelete, archivo, fecha }) => {

    const dateFormat = new Date(fecha).toLocaleDateString("es-ES")

	return (
		<Stack
			shadow='sm'
			bgColor='#FAF9F6'
			w='100%'
			padding={2}
			borderRadius={5}
			direction='row'
			align='center'
			justify='space-between'
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
