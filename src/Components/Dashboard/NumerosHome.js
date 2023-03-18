import React, { useEffect, useState } from 'react';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';
import {
	Flex,
	Heading,
	Divider,
	Input,
	Buton,
	Text,
	Stack,
	useToast,
	useMediaQuery,
	Spinner,
} from '@chakra-ui/react';
import InputsContainer from './InputsContainer';

const NumerosHome = () => {
	const toast = useToast();
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	const [numerosHome, setNumerosHome] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getNumeros = async () => {
			setIsLoading(true);
			const docRef = doc(firestore, 'numeros', 'tiF3BJeOfNCa6JC1Rho9');
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				setNumerosHome(docSnap.data());
			} else {
				console.log('Error al traer los datos del usuario');
			}
			setIsLoading(false);
		};

		getNumeros();
	}, []);

	const handleUpdate = async (nuevoResiduo, nuevoElectricidad, nuevoSolar) => {
        setIsLoading(true)
		const entradaRef = doc(firestore, 'numeros', 'tiF3BJeOfNCa6JC1Rho9');
		await updateDoc(entradaRef, {
			residuos: nuevoResiduo,
			electrica: nuevoElectricidad,
			solar: nuevoSolar,
		});
        setIsLoading(false)
		toast({
			title: '¡Datos actualizados! 😎',
			status: 'success',
			duration: 7000,
			isClosable: true,
			variant: 'top-accent',
			position: 'top',
		});
	};

	return (
		<Flex
			w='350px'
			bgColor='brand.primario'
			padding={5}
			borderRadius={5}
			flexDir='column'
			fontFamily={'fonts.open'}
		>
			<Heading size='md' color='white' fontFamily={'fonts.open'}>
				Números home
			</Heading>
			<Divider marginBlock={2} />
			{numerosHome ? (
				<InputsContainer
					residuos={numerosHome.residuos}
					electrica={numerosHome.electrica}
                    isLoading={isLoading}
					solar={numerosHome.solar}
					handleUpdate={handleUpdate}
				/>
			) : (
				<Spinner color='white' />
			)}
		</Flex>
	);
};

export default NumerosHome;
