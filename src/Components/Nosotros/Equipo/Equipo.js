import React from 'react';
import {
	Flex,
	Divider,
	useMediaQuery,
	Box,
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionIcon,
	AccordionPanel,
	Heading,
	useColorMode,
	Text,
	Image,
} from '@chakra-ui/react';

const Equipo = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	const { colorMode } = useColorMode();

	return (
		<Flex
			justifyContent={'center'}
			alignItems={'center'}
			flexDir={'column'}
			marginBottom={5}
		>
			<Flex w={isMobile ? '90vw' : '70vw'} padding={5} flexDir={'column'}>
				<Heading
					fontFamily={'fonts.open'}
					color={'brand.primario'}
					padding={2}
					size={isMobile ? 'md' : 'lg'}
					textAlign={isMobile && 'center'}
				>
					Conocé el equipo
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
				w={isMobile ? '90vw' : '70vw'}
			>
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
						<Image
							src='/assets/teamJP.webp'
							alt='Imagen Juan Pablo Macagno'
							width={'100%'}
						/>
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
											Juan Pablo Macagno
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
											Gerente
										</Heading>
										<Text fontSize={'sm'} as={'i'}>
											Licenciado en Biotecnología (UNR), PhD en Biotecnología
											(Universidad de Glasgow, Reino Unido). Vasta experiencia
											en investigación, desarrollo, estructuración y gestión de
											proyectos de energía renovable, gestión ambiental y de
											residuos sólidos urbanos e industriales.
										</Text>
									</Flex>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</Flex>
				</Box>
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
						<Image
							src='/assets/teamJuli.webp'
							alt='Imagen Julieta Oviedo'
							width={'100%'}
						/>
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
											Julieta Oviedo
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
											Responsable de Operación y Logística
										</Heading>
										<Text fontSize={'sm'} as={'i'}>
											Licenciada en Ambiente y Energías Renovables (UNVM).
											Experiencia en diseño y desarrollo de proyectos solares
											fotovoltaicos de pequeña y mediana escala y en gestión de
											residuos orgánicos agroindustriales y operación de plantas
											de biogás.
										</Text>
									</Flex>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</Flex>
				</Box>
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
						<Image
							src='/assets/teamFlavio.webp'
							alt='Imagen Flavio Lepore'
							width={'100%'}
						/>
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
											Flavio Lepore
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
											Responsable de Ingeniería y Mantenimiento
										</Heading>
										<Text fontSize={'sm'} as={'i'}>
											Ingeniero Mecánico (UNRC) y diplomado en gestión de
											activos y mantenimiento (UTN). Experiencia en diseño y
											desarrollo de diferentes proyectos de ingeniería en
											industrias como la automotriz, medicina y metalmecánica.
											Experiencia en desarrollo de proyectos, gestión de
											mantenimiento y operación de plantas de biogás.
										</Text>
									</Flex>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</Flex>
				</Box>
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
						<Image
							src='/assets/teamMR.webp'
							alt='Imagen Nicolas Bullo'
							width={'100%'}
						/>
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
											Martín Romagnoli
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
											Responsable de Gestión Ambiental
										</Heading>
										<Text fontSize={'sm'} as={'i'}>
											Ingeniero Ambiental (UNL). Experiencia en implementación
											de sistemas de gestión y control documental, y asesoría
											del cumplimiento legal en materia ambiental.
										</Text>
									</Flex>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</Flex>
				</Box>
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
						<Image
							src='/assets/teamBullo.webp'
							alt='Imagen Nicolas Bullo'
							width={'100%'}
						/>
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
											Nicolás Bullo
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
											Responsable de valorización agronómica del digestato
										</Heading>
										<Text fontSize={'sm'}>
											Estudiante avanzado de Ing. Agronómica en Facultad De
											Agronomía y Veterinaria (UNRC). Se unió a Cleanergy para
											realizar su trabajo final de grado y desde entonces se
											encarga de realizar el asesoramiento técnico agronómico
											para la revalorización del Digestato.
										</Text>
									</Flex>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</Flex>
				</Box>
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
						<Image
							src='/assets/teamMarle.webp'
							alt='Imagen Marlene Martinez'
							width={'100%'}
						/>
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
											Marlene Martinez
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
											Administrativa
										</Heading>
										<Text fontSize={'sm'}>
											Estudiante de la carrera Contador Publico Nacional en
											Universidad Nacional de Cuyo (Mendoza). Dentro de
											Cleanergy Renovables S.A. realiza tareas administrativas
											varias.
										</Text>
									</Flex>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</Flex>
				</Box>
			</Flex>
		</Flex>
	);
};

export default Equipo;
