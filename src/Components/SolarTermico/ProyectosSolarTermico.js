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

const ProyectosSolarTermico = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	const { colorMode } = useColorMode();

	return (
		<Flex justifyContent={'center'}>
			<Flex width={isMobile ? '90vw' : '70vw'} flexDir={'column'}>
				<Flex width={isMobile ? '90vw' : '70vw'} padding={5} flexDir={'column'}>
					<Heading
						fontFamily={'fonts.open'}
						color={'brand.primario'}
						padding={2}
						size={isMobile ? 'md' : 'lg'}
						textAlign={isMobile && 'center'}
					>
						¡Contactate con nosotros para sumarte al ahorro energético!
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
								src='/assets/piscina.webp'
								alt='Climatización de piscinas'
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
											<Heading color={'brand.primario'} fontSize={'xl'}>
												Climatización de Piscinas
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
											<Text fontSize={'sm'} marginBottom={2}>
												Existen diferentes tecnologías de colectores solares que
												permiten elevar la temperatura del agua en 10 ºC, no
												consumen energía eléctrica o gas, son fáciles de
												instalar y utilizan el mismo sistema de recirculación de
												la pileta.
											</Text>
											<Text fontSize={'sm'} as={"b"}>
												¡Podrás disfrutar de tu pileta desde septiembre hasta
												abril!
											</Text>
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
								src='/assets/techos.webp'
								alt='Agua Caliente Sanitaria'
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
											<Heading color={'brand.primario'} fontSize={'xl'}>
												Agua Caliente Sanitaria
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
												Ahorra hasta un 80% de gas o electricidad.
											</Heading>
											<Text fontSize={'sm'} marginBottom={2}>
												Los termotanques solares permiten obtener agua caliente
												sanitaria (ACS) utilizando la energía del sol, lo cual
												lo convierte en una gran alternativa en aquellos hogares
												en donde no se cuenta con red de gas natural. Además,
												permiten ahorrar hasta un 80% de gas o electricidad en
												comparación con un Termotanque convencional.
											</Text>
											<Heading
												fontSize={'lg'}
												marginBottom={2}
												fontFamily={'fonts.open'}
											>
												¿Cómo elegir un TST para mi hogar?
											</Heading>
											<Text fontSize={'sm'}>
												Se calculan 50 lts de agua por persona por día.
												Capacidades disponibles: 100, 150, 200, 250, 300 y 360
												lts.
											</Text>
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
								src='/assets/bomba.webp'
								alt='Climatización de ambientes'
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
											<Heading color={'brand.primario'} fontSize={'xl'}>
												Climatización de Ambientes
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
												La climatización más eficaz contra el frío.
											</Heading>
											<Text fontSize={'sm'} marginBottom={2}>
												Una bomba de calor es un dispositivo utilizado para
												producir calor utilizando la temperatura del aire o
												aerotermia. Este equipo puede reemplazar a una caldera
												en forma directa produciendo agua caliente para uso
												sanitario o calefacción. El COP o Coeficient of
												Performance es de 4 a 1 aprox. Es decir que por cada W
												de energía.
											</Text>
											<Text fontSize={'sm'}>
												• Reduce los costos de facturación en Energía Eléctrica
												o Gas.
											</Text>
											<Text fontSize={'sm'}>• Mantenimiento sencillo.</Text>
											<Text fontSize={'sm'}>
												• Puede proporcionar refrigeración, calefacción y agua
												caliente.
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

export default ProyectosSolarTermico;
