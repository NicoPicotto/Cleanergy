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
					color={'brand.secundario'}
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
											Licenciado en Biotecnología (UNR), PhD en Biotecnología
											(Universidad de Glasgow, Reino Unido)
										</Heading>
										<Text fontSize={'sm'}>
											Vasta experiencia en Medio Ambiente, investigación y
											desarrollo de procesos biotecnológicos y gestión de
											residuos sólidos urbanos (GIRSU).
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
											Licenciada en Ambiente y Energías Renovables (UNVM)
										</Heading>
										<Text fontSize={'sm'}>
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
											Ingeniero Mecánico (UNRC) y diplomado en gestión de
											activos y mantenimiento (UTN)
										</Heading>
										<Text fontSize={'sm'}>
											Experiencia en diseño y desarrollo de diferentes proyectos
											de ingeniería en industrias como la automotriz, medicina y
											metalmecánica. Experiencia en desarrollo de proyectos,
											gestión de mantenimiento y operación de plantas de biogás.
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
											Estudiante avanzado de Ing. Agronómica en Facultad De
											Agronomía y Veterinaria (UNRC)
										</Heading>
										<Text fontSize={'sm'}>
											Se unió a Cleanergy para realizar su trabajo final de
											grado y desde entonces se encarga de realizar el
											asesoramiento técnico agronómico para la revalorización
											del Digestato.
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
											Estudiante de la carrera Contador Publico Nacional en
											Universidad Nacional de Cuyo (Mendoza)
										</Heading>
										<Text fontSize={'sm'}>
											Dentro de Cleanergy Renovables S.A. realiza tareas
											administrativas.
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
