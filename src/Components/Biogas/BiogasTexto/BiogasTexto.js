import React from 'react';
import {
	Flex,
	Text,
	Divider,
	Heading,
	useMediaQuery,
	useColorMode,
} from '@chakra-ui/react';
import VSensor from '../../Animations/VSensor';

const BiogasTexto = () => {
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
						Ofrecemos soluciones y servicios end-to-end para productores
						agropecuarios, municipios, e inversores y desarrolladores privados.
					</Heading>
					<Divider borderColor={'brand.terciario'} padding={2} />
				</Flex>

				<Flex>
					<Divider
						orientation='vertical'
						marginTop={5}
						borderColor={'brand.secundario'}
					/>
					<Flex flexDir={'column'}>
						<VSensor
							text='Desarrollo temprano de proyectos: concepción, búsqueda y
							análisis de oportunidades y riesgos, y prefactibilidad
							técnico-económica.'
						/>
						<VSensor text='Diseño e ingeniería: Conceptual, básica y de detalle.' />
						<VSensor text='Provisión de tecnología.' />
						<VSensor
							text='Gestión Integral de proyecto: Desde el presupuesto y
									análisis de proveedores y contratistas, hasta la
									supervisión de la construcción, asistencia y coordinación
									en gestión de permisos y habilitaciones.'
						/>
						<VSensor text='EPC: Ingeniería, procura y construcción.' />
						<VSensor text='Puesta en marcha biológica.' />
						<VSensor
							text='Operación de plantas en actividad: Gestión logística de
								transportistas de residuos, monitoreo fisicoquímico y
								biológico diario, supervisión de operarios de planta,
								implementación de sistemas de gestión, búsqueda de
								sustratos alternativos.'
						/>
						<VSensor
							text='Mantenimiento de plantas en actividad: electromecánico del
								equipamiento de planta, y mantenimientos básicos de CHPs
								(cambios de filtros, aceites, bujías, limpieza en
								general).'
						/>
						<VSensor
							text='Owner’s Engineering y optimización de proyectos
								existentes.'
						/>
					</Flex>
				</Flex>
				<Text>
					<Flex marginTop={10}>
						<Text
							as={'i'}
							fontFamily={'fonts.open'}
							marginBottom={10}
							bgColor={'brand.primario'}
							padding={5}
							color={colorMode === 'dark' ? '#1a202c' : 'white'}
						>
							A diferencia de otros proveedores de tecnología, CLEANERGY ejecuta
							las tareas con equipos de ingenieros propios, y con una fuerte
							presencia y experiencia local. De esta manera, es posible ejecutar
							proyectos con tecnología de primer nivel internacional y
							presupuestos elaborados localmente, adaptados a cada cliente y
							proyecto. Por otro lado, CLEANERGY no tiene exclusividad con
							proveedores internacionales de equipamiento, por lo que ofrecemos
							versatilidad para lograr el contenido nacional de las inversiones
							requeridas por cada proyecto.
						</Text>
					</Flex>
				</Text>
			</Flex>
		</Flex>
	);
};

export default BiogasTexto;
