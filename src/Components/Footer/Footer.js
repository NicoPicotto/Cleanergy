import React, { useRef } from 'react';
import {
	Flex,
	Text,
	Button,
	Stack,
	Box,
	useColorMode,
	Input,
	Textarea,
	Divider,
	useMediaQuery,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import {
	AiFillHome,
	AiFillClockCircle,
	AiFillMail,
	AiFillLinkedin,
} from 'react-icons/ai';
import { EmailIcon } from '@chakra-ui/icons';
import { RiWhatsappFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const { colorMode } = useColorMode();
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_wq6h6p3',
				'template_6tebulb',
				form.current,
				'LJbXjf8E0XodRbVNk'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		alert('¡Mensaje enviado! Responderemos a la brevedad');
	};

	return (
		<>
			<Flex
				bgColor={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
				padding={isMobile ? 5 : 6}
				justifyContent={isMobile ? 'center' : 'space-between'}
				flexWrap={'wrap'}
				id='footer'
			>
				<Box
					alignItems={isMobile ? 'center' : 'left'}
					height={'fit-content'}
					width={isMobile ? '100%' : '25%'}
					padding={5}
					flexDirection={'column'}
				>
					<Text marginBottom={2} fontWeight={'bold'} color={'brand.terciario'}>
						Contacto
					</Text>
					<Divider
						color={'brand.primario'}
						marginBottom={2}
						borderColor={'brand.terciario'}
					/>
					<Stack>
						<Flex
							flexDirection={'row'}
							alignItems={'center'}
							fontFamily={'fonts.open'}
							color={colorMode === 'dark' ? 'white' : 'gray.500'}
						>
							<AiFillHome color={'#2F855A'} />
							<Text fontSize={'xs'} marginLeft={1}>
								Bv. Buenos Aires 817, General Cabrera (Córdoba)
							</Text>
						</Flex>
						<Flex
							flexDirection={'row'}
							alignItems={'center'}
							fontFamily={'fonts.open'}
							color={colorMode === 'dark' ? 'white' : 'gray.500'}
						>
							<AiFillClockCircle color={'#2F855A'} />
							<Text fontSize={'xs'} marginLeft={1}>
								Lun - Vie 8:00-12:00 y 15:00 - 19:00 Hs | Sáb 9:00-12:00 Hs
							</Text>
						</Flex>
						<Flex
							flexDirection={'row'}
							alignItems={'center'}
							fontFamily={'fonts.open'}
							color={colorMode === 'dark' ? 'white' : 'gray.500'}
						>
							<RiWhatsappFill color={'#2F855A'} />
							<Text fontSize={'xs'} marginLeft={1}>
								<a
									href='https://wa.me/5493584904224'
									target={'_blank'}
									rel='noreferrer'
								>
									358-4904224
								</a>
							</Text>
						</Flex>
						<Flex
							flexDirection={'row'}
							alignItems={'center'}
							fontFamily={'fonts.open'}
							color={colorMode === 'dark' ? 'white' : 'gray.500'}
						>
							<AiFillMail color={'#2F855A'} />
							<Text fontSize={'xs'} marginLeft={1}>
								info@cleanergy.com.ar
							</Text>
						</Flex>
						<Flex
							flexDirection={'row'}
							alignItems={'center'}
							fontFamily={'fonts.open'}
							color={colorMode === 'dark' ? 'white' : 'gray.500'}
						>
							<AiFillLinkedin color={'#2F855A'} size={18} />
							<Text fontSize={'xs'} marginLeft={1}>
								<a
									href='https://www.linkedin.com/company/cleanergy-renovables/'
									target={'_blank'}
									rel='noreferrer'
								>
									Cleanergy Renovables S.A
								</a>
							</Text>
						</Flex>
					</Stack>
				</Box>
				{isMobile ? null : (
					<Box padding={5}>
						<Text
							marginBottom={2}
							fontWeight={'bold'}
							color={'brand.terciario'}
						>
							Mapa del sitio
						</Text>
						<Divider
							color={'brand.primario'}
							marginBottom={2}
							borderColor={'brand.terciario'}
						/>
						<Flex flexDirection={'row'}>
							<Stack
								flexDirection={'column'}
								spacing={4}
								alignItems={'flex-start'}
								marginRight={6}
							>
								<Button size={'sm'} variant={'link'}>
									<Link to='/nosotros'>Nosotros</Link>
								</Button>
							</Stack>
							<Stack
								flexDirection={'column'}
								spacing={4}
								alignItems={'flex-start'}
								marginRight={6}
							>
								<Button variant={'link'} size={'sm'}>
									<Link to='/biogas'>Biogás</Link>
								</Button>
								<Button variant={'link'} size={'sm'}>
									<Link to='/solarTermico'>Solar Térmico</Link>
								</Button>
								<Button variant={'link'} size={'sm'}>
									<Link to='/solarFotovoltaico'>
										Solar Fotovoltáico
									</Link>
								</Button>
								<Button variant={'link'} size={'sm'}>
									<Link to='/residuos'>Gestión de residuos</Link>
								</Button>
							</Stack>
							<Stack
								flexDirection={'column'}
								spacing={4}
								alignItems={'flex-start'}
								marginRight={10}
							>
								<Button variant={'link'} size={'sm'}>
									<Link to='/proyectos'>Proyectos</Link>
								</Button>
							</Stack>
						</Flex>
					</Box>
				)}
				<Flex
					width={isMobile ? '100%' : '30%'}
					padding={5}
					flexDir={'column'}
					as='form'
					ref={form}
					onSubmit={sendEmail}
				>
					<Text marginBottom={2} fontWeight={'bold'} color={'brand.terciario'}>
						Esperamos tu mensaje
					</Text>
					<Divider
						color={'brand.primario'}
						marginBottom={2}
						borderColor={'brand.terciario'}
					/>
					<Flex
						flexDirection={'row'}
						justifyContent={'space-between'}
						marginBottom={2}
					>
						<Input
							placeholder='Nombre'
							name='name'
							variant='filled'
							_hover={'none'}
							width={'49%'}
							size={'sm'}
							borderRadius={6}
						/>
						<Input
							placeholder='Email'
							name='email'
							variant='filled'
							_hover={'none'}
							width={'49%'}
							size={'sm'}
							borderRadius={6}
						/>
					</Flex>
					<Flex marginBottom={3}>
						<Textarea
							placeholder='Mensaje'
							name='message'
							variant='filled'
							_hover={'none'}
							size={'sm'}
							borderRadius={6}
						/>
					</Flex>
					<Button
						width={'fit-content'}
						colorScheme={'green'}
						rightIcon={<EmailIcon />}
						type='submit'
					>
						Enviar
					</Button>
				</Flex>
			</Flex>
			<Flex
				height={'3vh'}
				alignItems={'center'}
				justifyContent={'center'}
				bgColor={colorMode === 'dark' ? null : 'brand.terciario'}
			>
				<Text fontSize={12} color={'white'}>
					© {currentYear} Cleanergy - All rights reserved.{' '}
				</Text>
			</Flex>
		</>
	);
};

export default Footer;
