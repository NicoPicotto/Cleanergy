import React from 'react';
import {
	Flex,
	Divider,
	Heading,
	useMediaQuery,
	useColorMode,
	Accordion,
	AccordionItem,
	Text,
	AccordionButton,
	Box,
	AccordionIcon,
	AccordionPanel,
	Image,
} from '@chakra-ui/react';

const CardsProyectos = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	const { colorMode } = useColorMode();

	return (
		<Flex justifyContent={'center'}>
			<Flex width={isMobile ? '90vw' : '70vw'} flexDir={'column'}>
				<Flex width={isMobile ? '90vw' : '70vw'} padding={5} flexDir={'column'}>
					<Heading
						fontFamily={'fonts.open'}
						color={'brand.secundario'}
						padding={2}
						size={isMobile ? 'md' : 'lg'}
						textAlign={isMobile && 'center'}
					>
						Conocé nuestros proyectos en funcionamiento de 3C Biogás y Alimentos
						Magros.
					</Heading>
					<Divider borderColor={'brand.terciario'} padding={2} />
				</Flex>
				<Flex
					justifyContent={'space-evenly'}
					alignItems={'center'}
					overflowX={'hidden'}
					marginBottom={5}
					flexDir={isMobile && 'column'}
					flexWrap={'wrap'}
				>
					<Box
						width={isMobile ? '90vw' : '30vw'}
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
							<Image
								src='/assets/proyectoBiogas.jpg'
								alt='Proyecto 3C Biogás'
								width={'100%'}
							/>
						</Box>
						<Flex
							padding={2}
							flexDir={'column'}
							justifyContent={'space-between'}
						>
							<Accordion allowToggle padding={1} borderColor={'transparent'}>
								<AccordionItem>
									<AccordionButton>
										<Flex
											alignItems={'center'}
											justifyContent={'space-between'}
											width={'100%'}
										>
											<Heading color={'brand.secundario'} fontSize={'xl'}>
												3C Biogás S.A.
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
												Datos generales
											</Heading>
											<Text fontSize={'sm'}>
												• Ubicado sobre Ruta E90 14km. Zona rural de Alcira
												Gigena, rovincia de Córdoba.
											</Text>
											<Text fontSize={'sm'}>
												• Potencia Contratada: 1MW / Potencia Instalada: 1,3 MW.
											</Text>
											<Text fontSize={'sm'}>
												• Producción de Energía: 24 MWh/día + 20% excedente /
												Consumo interno: 8-10%.
											</Text>
											<Text fontSize={'sm'}>
												• Producción de digestato: 60m3/día.
											</Text>
											<Text fontSize={'sm'}>
												• Habilitación comercial: 11/12/2019.
											</Text>
											<Text fontSize={'sm'}>• Personal: 24 Hs.</Text>
											<Text fontSize={'sm'}>
												• Biogás: 250m3 biogás/m3 hidrolizado - Calidad: 60-65%
												metano.
											</Text>
											<Text fontSize={'sm'}>• ISO 14.001.</Text>
										</Flex>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</Flex>
					</Box>
					<Box
						width={isMobile ? '90vw' : '30vw'}
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
							<Image
								src='/assets/proyectoAlimentos.jpg'
								alt='Alimentos Magros'
								width={'100%'}
							/>
						</Box>
						<Flex
							padding={2}
							flexDir={'column'}
							justifyContent={'space-between'}
						>
							<Accordion allowToggle padding={1} borderColor={'transparent'}>
								<AccordionItem>
									<AccordionButton>
										<Flex
											alignItems={'center'}
											justifyContent={'space-between'}
											width={'100%'}
										>
											<Heading color={'brand.secundario'} fontSize={'xl'}>
												Alimentos Magros
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
												Datos generales
											</Heading>
											<Text fontSize={'sm'}>
												• Ubicado sobre Ruta provincial 3 en Justiniano Posse,
												provincia de Córdoba.
											</Text>
											<Text fontSize={'sm'}>
												• Potencia Instalada: 400kW para autoconsumo.
											</Text>
											<Text fontSize={'sm'}>
												• Sustratos: Residuos de industria frigorífica.
											</Text>
											<Text fontSize={'sm'}>
												• Biogás: 250m3 biogás/Tn sustrato - Calidad: 60-65%
												metano.
											</Text>
										</Flex>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</Flex>
					</Box>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default CardsProyectos;
