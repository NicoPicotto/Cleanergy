import React from 'react';

import {
	Heading,
	Flex,
	Accordion,
	Box,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	AccordionButton,
	useMediaQuery,
	useColorMode,
} from '@chakra-ui/react';

const CardsBiogas = ({ title, text }) => {
	const { colorMode } = useColorMode();
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Accordion allowToggle width={isMobile ? '90vw' : '35vw'} padding={5}>
			<AccordionItem
				borderRadius={10}
				bgColor={colorMode === 'dark' ? '#1a202c' : 'brand.secundario'}
				borderColor={colorMode === 'dark' && 'brand.secundario'}
				borderWidth={colorMode === 'dark' && 1}
				boxShadow='md'
			>
				<Flex>
					<AccordionButton>
						<Box flex='1' textAlign='left' marginRight={2} padding={2}>
							<Heading fontFamily={'fonts.open'} color={'white'} size={'md'}>
								{title}
							</Heading>
						</Box>
						<AccordionIcon color={'white'} />
					</AccordionButton>
				</Flex>
				<AccordionPanel
					bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
					pb={4}
					fontFamily={'fonts.open'}
				>
					{text}
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default CardsBiogas;
