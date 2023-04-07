import React from 'react';
import { Flex, Stack, Heading } from '@chakra-ui/react';
import AdminDashboard from '../Components/Dashboard/AdminDashboard';
import { UserAuth } from '../Context/Context';

const adminDashboard = () => {
	const { user } = UserAuth();

	return (
		<Flex>
			{user && user.uid !== 'mXgsGCbtP8N3NTq2Ljs0xFLwuAJ3' ? (
				<Stack justify='center' align='center' w='100vw' h='100vh'>
					<Heading color='brand.primario'>No estás autorizado.</Heading>
				</Stack>
			) : (
				<AdminDashboard />
			)}
		</Flex>
	);
};

export default adminDashboard;
