import React from 'react';
import {
	Box,
	Heading,
	Flex,
	Text,
	Divider,
	Button,
	Image,
	useColorMode,
	useMediaQuery,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const ProjectsCard = ({ imageSrc, title, text, goTo, altImg }) => {
	const { colorMode } = useColorMode();

	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
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
				<Image src={imageSrc} alt={altImg} width={'100%'} />
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
						{title}
					</Heading>
					<Divider color={'brand.primario'} marginBottom={1} />
					<Text color={'brand.terciario'} fontSize='md'>
						{text}
					</Text>
				</Flex>
				<Link to={goTo}>
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
	);
};

export default ProjectsCard;
