import React from 'react';
import {
	Box,
	Image,
	Heading,
	Flex,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Text,
	useColorMode,
	useMediaQuery,
} from '@chakra-ui/react';

const PersonCard = ({ image, name, position, description }) => {
    
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	const { colorMode } = useColorMode();

	return (
		<Box
			width={isMobile ? '100%' : '45%'}
			borderRadius={20}
			backdropFilter={'auto'}
			bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
			boxShadow='md'
			borderColor={colorMode === 'dark' && 'brand.primario'}
			borderWidth={colorMode === 'dark' && 1}
			overflow={'hidden'}
			marginTop={5}
			marginBottom={5}
			transition={'0.3s'}
			_hover={{ boxShadow: 'xl' }}
		>
			<Box overflow={'hidden'}>
				<Image src={image} alt='Imagen Julieta Oviedo' width={'100%'} />
			</Box>
			<Flex padding={2} flexDir={'column'} justifyContent={'space-between'}>
				<Accordion allowToggle padding={1} borderColor={'transparent'}>
					<AccordionItem>
						<AccordionButton>
							<Flex
								alignItems={'center'}
								justifyContent={'space-between'}
								width={'100%'}
							>
								<Heading color={'brand.primario'} fontSize={'xl'}>
									{name}
								</Heading>
								<AccordionIcon color={'brand.terciario'} />
							</Flex>
						</AccordionButton>
						<AccordionPanel
							bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
							pb={4}
							fontFamily={'fonts.open'}
						>
							<Flex flexDir={'column'}>
								<Heading
									fontSize={'lg'}
									marginBottom={2}
									fontFamily={'fonts.open'}
								>
									{position}
								</Heading>
								<Text fontSize={'sm'} as={'i'}>
									{description}
								</Text>
							</Flex>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</Flex>
		</Box>
	);
};

export default PersonCard;
