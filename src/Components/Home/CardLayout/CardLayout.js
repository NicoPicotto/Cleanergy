import {
	Flex,
	Box,
	Heading,
	Text,
	Divider,
	Button,
	Image,
	useColorMode,
	useMediaQuery,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const CardLayout = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	const { colorMode } = useColorMode();

	return (
		<Flex
			alignItems={'flex-start'}
			justifyContent={'space-evenly'}
			flexWrap={'wrap'}
			padding={5}
			flexDir={isMobile && 'column'}
			id='services'
			scrollBehavior={'smooth'}
		>
			<Box
				width={isMobile ? '100%' : '22%'}
				borderRadius={20}
				backdropFilter={'auto'}
				bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
				boxShadow='md'
				borderColor={colorMode === 'dark' && 'brand.secundario'}
				borderWidth={colorMode === 'dark' && 1}
				overflow={'hidden'}
				marginTop={5}
				marginBottom={5}
				transition={'0.3s'}
				_hover={{ boxShadow: 'xl' }}
			>
				<Box overflow={'hidden'}>
					<Image
						src='/assets/biogas.webp'
						alt='Imagen del servicio de Biogás'
						width={'100%'}
					/>
				</Box>
				<Flex
					padding={5}
					flexDir={'column'}
					minHeight={isMobile ? 'fit-content' : '17em'}
					justifyContent={'space-between'}
				>
					<Flex flexDir={'column'} marginBottom={2}>
						<Heading
							color={'brand.secundario'}
							fontSize={'1.5em'}
							marginBottom={1}
						>
							Biogás
						</Heading>
						<Divider color={'brand.primario'} marginBottom={1} />
						<Text color={'brand.terciario'} fontSize='md'>
							Ofrecemos soluciones y servicios para productores agropecuarios e
							industrias alimenticias, municipios, plantas de biogás e
							inversores.
						</Text>
					</Flex>
					<Link to='/biogas'>
						<Button
							width={'fit-content'}
							colorScheme={'green'}
							rightIcon={<ChevronRightIcon />}
						>
							Ver más
						</Button>
					</Link>
				</Flex>
			</Box>
			<Box
				width={isMobile ? '100%' : '22%'}
				borderRadius={20}
				backdropFilter={'auto'}
				bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
				boxShadow='md'
				borderColor={colorMode === 'dark' && 'brand.secundario'}
				borderWidth={colorMode === 'dark' && 1}
				overflow={'hidden'}
				marginTop={5}
				marginBottom={5}
				transition={'0.3s'}
				_hover={{ boxShadow: 'xl' }}
			>
				<Box overflow={'hidden'}>
					<Image
						src='/assets/solart.webp'
						alt='Imagen del servicio de Solar Térmico'
						width={'100%'}
					/>
				</Box>
				<Flex
					padding={5}
					flexDir={'column'}
					minHeight={isMobile ? 'fit-content' : '17em'}
					justifyContent={'space-between'}
				>
					<Flex flexDir={'column'} marginBottom={2}>
						<Heading
							color={'brand.secundario'}
							fontSize={'1.5em'}
							marginBottom={1}
						>
							Solar Térmico
						</Heading>
						<Divider color={'brand.primario'} marginBottom={1} />
						<Text color={'brand.terciario'} fontSize='md'>
							Te brindamos diferentes alternativas para que aproveches la
							energía térmica para calentar agua caliente sanitaria (ACS),
							piscinas, y calefacción de ambientes.
						</Text>
					</Flex>
					<Link to='/solartermico'>
						<Button
							width={'fit-content'}
							colorScheme={'green'}
							rightIcon={<ChevronRightIcon />}
						>
							Ver más
						</Button>
					</Link>
				</Flex>
			</Box>
			<Box
				width={isMobile ? '100%' : '22%'}
				borderRadius={20}
				backdropFilter={'auto'}
				bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
				boxShadow='md'
				borderColor={colorMode === 'dark' && 'brand.secundario'}
				borderWidth={colorMode === 'dark' && 1}
				overflow={'hidden'}
				marginTop={5}
				marginBottom={5}
				transition={'0.3s'}
				_hover={{ boxShadow: 'xl' }}
			>
				<Box overflow={'hidden'}>
					<Image
						src='/assets/solarfv.webp'
						alt='Imagen del servicio de Solar Fotovoltáico'
						width={'100%'}
					/>
				</Box>
				<Flex
					padding={5}
					flexDir={'column'}
					minHeight={isMobile ? 'fit-content' : '17em'}
					justifyContent={'space-between'}
				>
					<Flex flexDir={'column'} marginBottom={2}>
						<Heading
							color={'brand.secundario'}
							fontSize={'1.5em'}
							marginBottom={1}
						>
							Solar Fotovoltáico
						</Heading>
						<Divider color={'brand.primario'} marginBottom={1} />
						<Text color={'brand.terciario'} fontSize='md'>
							Diseño e instalación de sistemas fotovoltaicos llave en mano. Te
							asesoramos para que puedas instalar el sistema fotovoltaico acorde
							a tus necesidades.
						</Text>
					</Flex>
					<Link to='/solarfotovoltaico'>
						<Button
							width={'fit-content'}
							colorScheme={'green'}
							rightIcon={<ChevronRightIcon />}
						>
							Ver más
						</Button>
					</Link>
				</Flex>
			</Box>
			<Box
				width={isMobile ? '100%' : '22%'}
				borderRadius={20}
				backdropFilter={'auto'}
				bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
				boxShadow='md'
				borderColor={colorMode === 'dark' && 'brand.secundario'}
				borderWidth={colorMode === 'dark' && 1}
				overflow={'hidden'}
				marginTop={5}
				marginBottom={5}
				transition={'0.3s'}
				_hover={{ boxShadow: 'xl' }}
			>
				<Box overflow={'hidden'}>
					<Image
						src='assets/residuos.webp'
						alt='Imagen del servicio de Gestión de Residuos'
						width={'100%'}
					/>
				</Box>
				<Flex
					padding={5}
					flexDir={'column'}
					minHeight={isMobile ? 'fit-content' : '17em'}
					justifyContent={'space-between'}
				>
					<Flex flexDir={'column'} marginBottom={2}>
						<Heading
							color={'brand.secundario'}
							fontSize={'1.5em'}
							marginBottom={1}
						>
							Gestión de Residuos
						</Heading>
						<Divider color={'brand.primario'} marginBottom={1} />
						<Text color={'brand.terciario'} fontSize='md'>
							Ofrecemos soluciones para generadores de residuos orgánicos y un
							servicio integral de gestión de residuos para municipios.
						</Text>
					</Flex>
					<Link to='/residuos'>
						<Button
							width={'fit-content'}
							colorScheme={'green'}
							rightIcon={<ChevronRightIcon />}
						>
							Ver más
						</Button>
					</Link>
				</Flex>
			</Box>
		</Flex>
	);
};

export default CardLayout;
