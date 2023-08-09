import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
	query,
	where,
	getDocs,
	orderBy,
	collection,
	limit,
	startAfter,
} from 'firebase/firestore';
import { firestore } from '../../firebase';
import { Flex, Spinner, useMediaQuery, Button } from '@chakra-ui/react';
import Archivos from './Archivos';
import DatosCliente from './DatosCliente';
import PowerBi from './PowerBi';

const Dashboard = () => {
	const [reportes, setReportes] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const paramsID = useParams();
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	//Estados de paginación
	const [currentPage, setCurrentPage] = useState(1);
	const [cursors, setCursors] = useState([]);
	const [direction, setDirection] = useState('forward');

	const ITEMS_PER_PAGE = 10;

	//Página anterior
	const handlePrevious = () => {
		setDirection('backward');
		if (currentPage > 1) {
			setDirection('backward');
			setCursors((prevCursors) => {
				const newCursors = [...prevCursors];
				newCursors.pop();
				return newCursors;
			});
			setCurrentPage((prevPage) => prevPage - 1);
		}
	};

	//Página siguiente
	const handleNext = () => {
		setDirection('forward');
		setCurrentPage(currentPage + 1);
	};

	useEffect(() => {
		const getReportes = async () => {
			setIsLoading(true);
			const docs = [];
			const lastCursor = cursors[cursors.length - 1];
			const q = query(
				collection(firestore, 'archivos'),
				where('idcliente', '==', paramsID.id),
				orderBy('fecha', 'desc'),
				...(lastCursor && currentPage > 1 ? [startAfter(lastCursor)] : []),
				limit(ITEMS_PER_PAGE)
			);

			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			if (direction === 'forward' && docs.length === ITEMS_PER_PAGE) {
				setCursors((prevCursors) => [
					...prevCursors,
					querySnapshot.docs[querySnapshot.docs.length - 1],
				]);
			}

			setReportes(docs);
			setIsLoading(false);
		};
		getReportes();
	}, [paramsID, currentPage]);

	return (
		<Flex justifyContent={'center'} w='100vw'>
			<Flex width={isMobile ? '90vw' : '70vw'} flexDir={'column'}>
				<Flex flexDir={'column'} padding={10}>
					<DatosCliente />
					<PowerBi />
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
					<Flex direction='row' gap='1em'>
						<Button
							onClick={handlePrevious}
							disabled={currentPage === 1}
							colorScheme='blue'
						>
							Anterior
						</Button>
						<Button
							onClick={handleNext}
							disabled={reportes ? reportes.length < ITEMS_PER_PAGE : true}
							colorScheme='blue'
						>
							Siguiente
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Dashboard;
