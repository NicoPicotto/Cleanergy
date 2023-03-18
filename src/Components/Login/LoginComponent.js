import React, { useState } from 'react';
import { useAuth } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
import {
	Heading,
	Flex,
	Divider,
	useColorMode,
	useMediaQuery,
	Stack,
	Text,
	Input,
	Button,
	Spinner,
} from '@chakra-ui/react';

const LoginComponent = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	const [isLoading, setIsLoading] = useState(false);
	const { colorMode } = useColorMode();

	const { userUid } = useAuth();

	const { login, resetPassword } = useAuth();
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [error, setError] = useState('');
	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			await login(user.email, user.password);
			navigate(`/usuario/${userUid}`);
		} catch (error) {
			setError('El mail o contraseña son incorrectas');
		}
	};

	const handleResetPassword = async (e) => {
		e.preventDefault();
		if (!user.email)
			return setError('Escribí un mail para recuperar tu contraseña.');
		try {
			await resetPassword(user.email);
			setError('Te enviamos un correo para resetear tu contraseña.');
		} catch (error) {
			setError('Email inválido.');
		}
	};

	return (
		<Flex justifyContent={'center'} w='100vw'>
			<Flex width={isMobile ? '90vw' : '70vw'} flexDir={'column'}>
				<Flex width={isMobile ? '90vw' : '70vw'} padding={5} flexDir={'column'}>
					<Heading
						fontFamily={'fonts.open'}
						color={'brand.secundario'}
						padding={2}
						size={isMobile ? 'md' : 'lg'}
						textAlign={'center'}
					>
						Acceso exclusivo para clientes
					</Heading>
					<Divider borderColor={'brand.terciario'} padding={2} />
				</Flex>
				<Flex
					marginBottom={20}
					onSubmit={submitHandler}
					as='form'
					justifyContent='center'
				>
					<Flex
						bgColor='white'
						shadow='md'
						flexDir='column'
						paddingY={5}
						paddingX={10}
						borderRadius={10}
						marginBlock={10}
						width={isMobile ? '90vw' : '500px'}
					>
						<Stack align='center' w='100%' spacing={5} marginBottom={5}>
							<Stack w='100%' spacing={5} fontFamily={'fonts.open'}>
								<Stack>
									<Text margin={0} fontSize='sm' as='b'>
										Correo electrónico
									</Text>
									<Input
										onChange={(e) =>
											setUser({ ...user, email: e.target.value })
										}
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
										onChange={(e) =>
											setUser({ ...user, password: e.target.value })
										}
										variant='outline'
										placeholder='*********'
										type='password'
										focusBorderColor='cuarto'
										isRequired
									/>
								</Stack>
							</Stack>

							{error && (
								<Text color='red' fontSize='sm'>
									{error}
								</Text>
							)}
						</Stack>
						<Stack
							direction={isMobile ? 'column' : 'row'}
							marginBottom={5}
							fontFamily={'fonts.open'}
						>
							<Button
								type='submit'
								colorScheme='green'
								bgColor='segundo'
								w='100%'
							>
								{isLoading ? <Spinner color='white' /> : 'Ingresar'}
							</Button>
						</Stack>
						<Button
							variant='link'
							onClick={handleResetPassword}
							fontFamily={'fonts.open'}
						>
							¿Olvidaste tu contraseña?
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default LoginComponent;
