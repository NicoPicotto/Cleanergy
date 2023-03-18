import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
	query,
	where,
	getDocs,
	collection,
} from 'firebase/firestore';
import { firestore } from '../../firebase';
import {
	Flex,
	Heading,
	Divider,
	Spinner,
	useMediaQuery,
} from '@chakra-ui/react';
import Archivos from './Archivos';
import DatosCliente from './DatosCliente';

const Dashboard = () => {
	const [reportes, setReportes] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const paramsID = useParams();
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	useEffect(() => {
        
		const getReportes = async () => {
            setIsLoading(true)
			const docs = [];
			const q = query(
				collection(firestore, 'archivos'),
				where('id-cliente', '==', paramsID.id)
			);
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setReportes(docs);
            setIsLoading(false)
		};
		getReportes();
        
	}, [paramsID]);

	return (
		<Flex justifyContent={'center'} w='100vw'>
			<Flex width={isMobile ? '90vw' : '70vw'} flexDir={'column'}>
				<Flex width={isMobile ? '90vw' : '70vw'} flexDir={'column'}>
					<Flex
						width={isMobile ? '90vw' : '70vw'}
						padding={5}
						flexDir={'column'}
					>
						<Heading
							fontFamily={'fonts.open'}
							color={'brand.secundario'}
							padding={2}
							size={isMobile ? 'md' : 'lg'}
							textAlign={isMobile && 'center'}
						>
							Accedé a todos tus reportes actualizados
						</Heading>
						<Divider borderColor={'brand.terciario'} padding={2} />
					</Flex>
				</Flex>
				<Flex flexDir={'column'}>
					<DatosCliente />
					<Flex flexDir='column' marginBottom={5} alignItems="center">
						{reportes &&
							reportes.map((arch) => (
								<Archivos
									key={arch.fecha}
									fecha={arch.fecha}
									archivo={arch.archivo}
								/>
							))}
                            {isLoading && <Spinner color="brand.secundario" size="lg" margin={5} />}
					</Flex>
                    
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Dashboard;
