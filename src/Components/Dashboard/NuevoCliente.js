import React, { useState } from 'react';
import {
	Flex,
	Heading,
	Divider,
	useToast,
	Stack,
	Text,
	Input,
	Button,
	Spinner,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore';
import { firestore } from '../../firebase';
import { useAuth } from '../../Context/Context';

const NuevoCliente = () => {
	//Lleva el auth al context
	const { registrarse, userUid, email } = useAuth();
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [nombre, setNombre] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const toast = useToast();
	const navigate = useNavigate();

	const submitRegistrarse = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			await registrarse(user.email, user.password);
		} catch (error) {
			console.log(error.message);
		}
		setIsLoading(false);
	};

	const submitData = async (nombre, apellido, telefono, email) => {
		try {
			setIsLoading(true);
			await setDoc(doc(firestore, 'usuarios', userUid), {
				nombre: nombre,
				idcliente: userUid,
				email,
			});
			toast({
				title: `¡Bienvenidx ${nombre}! 😎`,
				status: 'success',
				duration: 7000,
				isClosable: true,
				variant: 'top-accent',
				position: 'top',
			});
			navigate('/');
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<Flex
			w='50%'
			borderColor='lightgray'
			borderWidth={1}
			shadow='md'
			padding={5}
			borderRadius={5}
			flexDir='column'
			fontFamily={'fonts.open'}
		>
			<Heading size='md' color='brand.secundario' fontFamily={'fonts.open'}>
				Generar nuevo cliente
			</Heading>
			<Divider marginBlock={2} />
			<Flex
				onSubmit={submitRegistrarse}
				as='form'
				flexDirection='column'
				justifyContent='space-between'
				h='100%'
			>
				<Stack w='100%' spacing={5} fontFamily={'fonts.open'}>
					<Stack>
						<Text margin={0} fontSize='sm' as='b'>
							Correo electrónico
						</Text>
						<Input
							onChange={(e) => setUser({ ...user, email: e.target.value })}
							variant='outline'
							placeholder='juanperez@gmail.com'
							type='email'
							focusBorderColor='cuarto'
							isRequired
						/>
					</Stack>
					<Stack>
						<Text margin={0} fontSize='sm' as='b'>
							Contraseña
						</Text>
						<Input
							onChange={(e) => setUser({ ...user, password: e.target.value })}
							variant='outline'
							placeholder='*********'
							type='password'
							focusBorderColor='cuarto'
							isRequired
						/>
					</Stack>
				</Stack>
				<Button color='brand.secundario'>
					{isLoading ? (
						<Spinner color='brand.secundario' />
					) : (
						'Registrar nuevo cliente'
					)}
				</Button>
			</Flex>
		</Flex>
	);
};

export default NuevoCliente;
