import React from 'react';
import { Stack, Flex, useMediaQuery } from '@chakra-ui/react';
import NumerosHome from './NumerosHome';
import CargarDocumentos from './CargarDocumentos';
import NuevoCliente from './NuevoCliente';

const AdminDashboard = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Flex justifyContent={'center'} w='100vw' h='80vh' padding={10}>
			<Stack width={isMobile ? '90vw' : '70vw'} flexDir={'column'} h="100%">
				<Stack direction='row' h="100%">
					<NumerosHome />
					<CargarDocumentos />
				</Stack>
			</Stack>
		</Flex>
	);
};

export default AdminDashboard;
