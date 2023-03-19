import React from 'react';
import {
	Stack,
	Buton,
	Input,
	Text,
	Heading,
	Spinner,
	Flex,
	useMediaQuery,
	Divider,
} from '@chakra-ui/react';
import NumerosHome from './NumerosHome';
import CargarDocumentos from './CargarDocumentos';

const AdminDashboard = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Flex justifyContent={'center'} w='100vw' h='80vh' padding={10}>
			<Stack width={isMobile ? '90vw' : '70vw'} flexDir={'column'}>
				<Stack direction='row'>
					<NumerosHome />
					<CargarDocumentos />
				</Stack>
			</Stack>
		</Flex>
	);
};

export default AdminDashboard;
