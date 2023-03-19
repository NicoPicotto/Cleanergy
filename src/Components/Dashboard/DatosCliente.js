import React, { useEffect, useState } from 'react';
import { Flex, Heading, Stack, StackDivider, useMediaQuery } from '@chakra-ui/react';
import { useAuth } from '../../Context/Context';
import {
	query,
	where,
	getDocs,
	collection,
} from 'firebase/firestore';
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

	return (
		<Flex
			flexDir='column'
			fontFamily={'fonts.open'}
            padding={5}
			borderRadius={5}
			shadow='md'
			bgColor='brand.primario'
		>
			{datos &&
				datos.map((d) => (
					<Stack key={d.id} direction={isMobile ? "column" : "row"} divider={<StackDivider />}>
						<Heading size='lg' color='white'>
							{d.nombre}
						</Heading>	
					</Stack>
					
				))}
		</Flex>
	);
};

export default DatosCliente;
