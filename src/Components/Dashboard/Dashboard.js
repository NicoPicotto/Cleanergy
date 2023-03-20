import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { query, where, getDocs, orderBy, collection } from 'firebase/firestore';
import { firestore } from '../../firebase';
import { Flex, Spinner, useMediaQuery } from '@chakra-ui/react';
import Archivos from './Archivos';
import DatosCliente from './DatosCliente';

const Dashboard = () => {
	const [reportes, setReportes] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const paramsID = useParams();
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	useEffect(() => {
		const getReportes = async () => {
			setIsLoading(true);
			const docs = [];
			const q = query(
				collection(firestore, 'archivos'),
				where('idcliente', '==', paramsID.id),
				orderBy('fecha', 'desc')
			);
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setReportes(docs);
			setIsLoading(false);
		};
		getReportes();
	}, [paramsID]);

	return (
		<Flex justifyContent={'center'} w='100vw'>
			<Flex width={isMobile ? '90vw' : '70vw'} flexDir={'column'}>
				<Flex flexDir={'column'} padding={10}>
					<DatosCliente />
					<Flex flexDir='column' marginBottom={5} alignItems='center'>
						{reportes &&
							reportes.map((arch) => (
								<Archivos
									key={arch.fecha}
									fecha={arch.fecha}
									archivo={arch.archivo}
									titulo={arch.titulo}
								/>
							))}
						{isLoading && (
							<Spinner color='brand.secundario' size='lg' margin={5} />
						)}
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Dashboard;
