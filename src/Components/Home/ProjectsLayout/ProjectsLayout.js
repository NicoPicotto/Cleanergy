import React from 'react';
import {
	Flex,
	useMediaQuery,
	Box,
	Heading,
	Text,
	Divider,
	Button,
	Image,
	useColorMode,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const ProjectsLayout = () => {
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
				width={isMobile ? '100%' : '40%'}
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
						src='/assets/home3c.webp'
						alt='Imagen de proyecto 3C Biogás'
						width={'100%'}
					/>
				</Box>
				<Flex
					padding={5}
					flexDir={'column'}
					minHeight={'fit-content'}
					justifyContent={'space-between'}
				>
					<Flex flexDir={'column'} marginBottom={2}>
						<Heading
							color={'brand.secundario'}
							fontSize={'1.5em'}
							marginBottom={1}
						>
							CT Gigena - 3C Biogás SA
						</Heading>
						<Divider color={'brand.primario'} marginBottom={1} />
						<Text color={'brand.terciario'} fontSize='md'>
							Planta de biogás de 1MW. Utiliza residuos orgánicos
							agroindustriales para producir energía eléctrica, la cual se
							vende a CAMMESA.
						</Text>
					</Flex>
					<Link to='/proyectos'>
						<Button
							width={'fit-content'}
							colorScheme={'green'}
							rightIcon={<ChevronRightIcon />}
						>
							Conocé el proyecto
						</Button>
					</Link>
				</Flex>
			</Box>
			<Box
				width={isMobile ? '100%' : '40%'}
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
						src='/assets/homeam.webp'
						alt='Imagen de alimentos magros'
						width={'100%'}
					/>
				</Box>
				<Flex
					padding={5}
					flexDir={'column'}
					minHeight={'fit-content'}
					justifyContent={'space-between'}
				>
					<Flex flexDir={'column'} marginBottom={2}>
						<Heading
							color={'brand.secundario'}
							fontSize={'1.5em'}
							marginBottom={1}
						>
							Alimentos Magros
						</Heading>
						<Divider color={'brand.primario'} marginBottom={1} />
						<Text color={'brand.terciario'} fontSize='md'>
							Planta de biogás de 0,4MW. Utiliza sus propios residuos orgánicos
							para generar energía eléctrica y autoconsumirla en su proceso
							productivo.
						</Text>
					</Flex>
					<Link to='/proyectos'>
						<Button
							width={'fit-content'}
							colorScheme={'green'}
							rightIcon={<ChevronRightIcon />}
						>
							Conocé el proyecto
						</Button>
					</Link>
				</Flex>
			</Box>
		</Flex>
	);
};

export default ProjectsLayout;
