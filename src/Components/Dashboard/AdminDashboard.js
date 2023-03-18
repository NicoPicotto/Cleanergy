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

const AdminDashboard = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Flex justifyContent={'center'} w='100vw'>
			<Flex width={isMobile ? '90vw' : '70vw'} flexDir={'column'}>
				<Flex padding={10} flexDir='column'>
					<NumerosHome />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default AdminDashboard;
