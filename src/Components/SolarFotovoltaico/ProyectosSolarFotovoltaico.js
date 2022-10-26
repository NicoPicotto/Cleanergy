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

const ProyectosSolarFotovoltaico = () => {
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
						Dimensionamiento e instalación de sistemas fotovoltaicos llave en
						mano, te asesoráramos para que puedas instalar tu sistema
						fotovoltaico de acuerdo a tus necesidades.
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
								src='/assets/offgrid.jpg'
								alt='Sistema off grid'
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
												Sistemas Off Grid
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
												Estos sistemas son ideales para aquellos lugares donde
												la red de energía eléctrica no llega (zona rural,
												sierras de Córdoba, motor home, etc). Son sistemas
												asociados a baterías capaces de suministrar energía a
												los consumos durante las 24 hs del día. Estos sistemas
												requieren un dimensionamiento según el proyecto.
											</Text>
											<Heading
												fontSize={'lg'}
												marginBottom={2}
												fontFamily={'fonts.open'}
											>
												¿Qué debo tener en cuenta?
											</Heading>
											<Text fontSize={'sm'}>
												• Ubicación geográfica donde se realiza la instalación.{' '}
											</Text>
											<Text fontSize={'sm'}>• Recurso solar.</Text>
											<Text fontSize={'sm'}>
												• Consumos eléctricos y potencias.
											</Text>
											<Text fontSize={'sm'} marginBottom={2}>
												• Días de autonomías
											</Text>
											<Heading
												fontSize={'lg'}
												marginBottom={2}
												fontFamily={'fonts.open'}
											>
												¿Qué información debo considerar para solicitar un
												presupuesto?
											</Heading>
											<Text fontSize={'sm'}>• Ubicación geográfica.</Text>
											<Text fontSize={'sm'}>
												• Facturas de proveedor actual.
											</Text>
											<Text fontSize={'sm'} marginBottom={2}>
												• Saber cómo se distribuye el consumo durante el día.
											</Text>
											<Heading
												fontSize={'lg'}
												marginBottom={2}
												fontFamily={'fonts.open'}
											>
												¿Dónde puedo instalarlo?
											</Heading>
											<Text fontSize={'sm'}>• Casillas rurales.</Text>
											<Text fontSize={'sm'}>
												• Viviendas rurales o en zonas aisladas.
											</Text>
											<Text fontSize={'sm'}>• Balsas.</Text>
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
								src='/assets/ongrid.jpg'
								alt='Sistemas on grid'
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
												Sistemas On Grid
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
												Sistema de energía limpia, que genera electricidad a
												través de un grupo de paneles solares. El sistema, sin
												bacterias, usa la red distribuidora para inyectar lo que
												excede de esa generación, o bien para suministrar lo que
												el sistema propio no puede generar en ciertos momentos,
												como la noche o días nublados. El sistema se ocupa
												automáticamente de gestionar el flujo de energía de modo
												que no se noatará cuando la energía que usamos es propia
												o dela red.
											</Text>
											<Heading
												fontSize={'lg'}
												marginBottom={2}
												fontFamily={'fonts.open'}
											>
												¿Qué información debo considerar para solicitar un
												presupuesto?
											</Heading>
											<Text fontSize={'sm'}>• Ubicación geográfica.</Text>
											<Text fontSize={'sm'}>
												• Facturas de proveedor actual.
											</Text>
											<Text fontSize={'sm'} marginBottom={2}>
												• Saber cómo se distribuye el consumo durante el día.
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
								src='/assets/bombeo.jpg'
								alt='Bombeo solar'
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
												Bombeo Solar
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
												Los sistemas para alimentar bombas de agua son ideales
												para la extracción de agua de pozo sin límites de
												altura, caudales y costo cero, entregando agua todos los
												días del año, incluso días nublados gracias a la
												utilización de motores de alta eficiencia.
											</Text>
											<Heading
												fontSize={'lg'}
												marginBottom={2}
												fontFamily={'fonts.open'}
											>
												¿Cómo elijo un sistema de bombeo acorde a mis
												necesidades?
											</Heading>
											<Text fontSize={'sm'} marginBottom={2}>
												• Ubicación geográfica.
											</Text>
											<Text fontSize={'sm'}>
												• Caudal diario que deseamos suministrar.
											</Text>
											<Text fontSize={'sm'}>• Altura total del bombeo.</Text>
											<Text fontSize={'sm'} marginBottom={2}>
												• Período de funcionamiento (anual o estacional).
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

export default ProyectosSolarFotovoltaico;
