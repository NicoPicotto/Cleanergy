import React from 'react';
import { Heading, Text, Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<Flex
			w='100vw'
			flexDir='column'
			justifyContent='center'
			h='50vh'
			alignItems='center'
		>
			<Heading color={'brand.primario'} fontFamily="fonts.open" margin={1}>Error 404</Heading>
			<Text margin={1} fontFamily="fonts.open">La página que buscás no existe.</Text>
			<Link to='/'>
				<Button color={'brand.primario'} variant={'outline'} margin={1}>
					Volver al inicio
				</Button>
			</Link>
		</Flex>
	);
};

export default ErrorPage;
