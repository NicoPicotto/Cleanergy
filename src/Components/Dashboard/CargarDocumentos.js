import React, { useState, useEffect } from 'react';
import { query, getDocs, collection } from 'firebase/firestore';
import { firestore } from '../../firebase';
import { Flex, Heading, Divider, Select, Text, Stack } from '@chakra-ui/react';
import ListaArchivos from './ListaArchivos';

const CargarDocumentos = () => {
	const [cliente, setCliente] = useState(null);
	const [clienteSeleccionado, setClienteSeleccionado] = useState('');

	useEffect(() => {
		const getClientes = async () => {
			const docs = [];
			const q = query(collection(firestore, 'clientes'));
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setCliente(docs);
		};
		getClientes();
	}, []);

	return (
		<Flex
			w='65%'
			h="100%"
			borderColor='lightgray'
			borderWidth={1}
			shadow='md'
			padding={5}
			borderRadius={5}
			flexDir='column'
			fontFamily={'fonts.open'}
		>
			<Heading size='md' color='brand.secundario' fontFamily={'fonts.open'}>
				Gestionar reportes
			</Heading>
			<Divider marginBlock={2} />
			<Stack>
				<Text margin={0} fontSize='sm' as='b'>
					Cliente
				</Text>
				<Select
					placeholder='Seleccionar cliente'
					onChange={(e) => setClienteSeleccionado(e.target.value)}
				>
					{cliente &&
						cliente.map((cli) => (
							<option key={cli.id} value={cli.idcliente}>
								{cli.nombre}
							</option>
						))}
				</Select>
				{clienteSeleccionado && (
					<ListaArchivos seleccionado={clienteSeleccionado} />
				)}
			</Stack>
		</Flex>
	);
};

export default CargarDocumentos;
