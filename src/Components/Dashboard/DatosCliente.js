import React, { useEffect, useState } from 'react';
import {
	Flex,
	Heading,
	Stack,
	StackDivider,
	useMediaQuery,
	Image,
} from '@chakra-ui/react';
import { useAuth } from '../../Context/Context';
import { query, where, getDocs, collection } from 'firebase/firestore';
import { firestore } from '../../firebase';

const DatosCliente = () => {
	const { userUid } = useAuth();

	const [datos, setDatos] = useState(null);
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	useEffect(() => {
		const getDatos = async () => {
			const docs = [];
			const q = query(
				collection(firestore, 'clientes'),
				where('idcliente', '==', userUid)
			);
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setDatos(docs);
		};
		getDatos();
	}, []);

	console.log(datos);

	return (
		<Flex
			flexDir='column'
			fontFamily={'fonts.open'}
			padding={5}
			borderRadius={5}
			shadow='md'
			bgColor='white'
			borderColor='brand.primario'
			borderWidth={2}
		>
			{datos &&
				datos.map((d) => (
					<Stack
						key={d.id}
						direction={isMobile ? 'column' : 'row'}
						divider={<StackDivider />} align="center"
					>
						<Image src={d.logo} h='75px' />
						<Heading size='xl' color='brand.primario'>
							{d.nombre}
						</Heading>
					</Stack>
				))}
		</Flex>
	);
};

export default DatosCliente;
