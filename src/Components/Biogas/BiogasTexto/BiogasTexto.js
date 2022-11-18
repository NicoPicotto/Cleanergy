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
						Te detallamos nuestras servicios y las soluciones que ofrecemos.
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
						<VSensor text='Factibilidad técnico-económica para el desarrollo de proyectos (concepción, relevamientos de datos y análisis de oportunidades y riesgos).' />
						<VSensor text='Desarrollo de proyectos (aspectos técnicos, legales, administrativos y financieros).' />
						<VSensor text='Diseño e ingeniería propia (conceptual, básica y de detalle).' />
						<VSensor text='Ejecución y gestión integral de proyectos. Tanto en modalidad llave en mano o libro abierto. Desde el presupuesto y análisis de proveedores y contratistas, hasta la supervisión de la construcción, asistencia y coordinación en gestión de permisos y habilitaciones.' />
						<VSensor text='Asesoramiento y gestión de compra de tecnología y equipamiento electromecánico.' />
						<VSensor text='Puesta en marcha biológica.' />
						<VSensor text='Operación integral de plantas de biogás (para plantas con cualquier tipo de tecnología y antigüedad):' />
						<Flex paddingLeft={10} as={'i'} flexDir={'column'}>
							<VSensor text='Plan anual de capacitación teórica-práctica del personal (modalidad charlas y talleres).' />
							<VSensor text='Asesoramiento biológico y fisicoquímico.' />
							<VSensor text='Asistencia en la gestión operativa (procedimientos regulares, respuesta ante emergencias, asistencia en adquisición de equipos de monitoreo y control).' />
							<VSensor text='Asistencia en la gestión del mantenimiento (planes correctivos, preventivos y predictivos, detección de provisión local de componentes mecánicos para reducir importaciones, asistencia en adquisición de equipamiento electromecánico).' />
							<VSensor
								text='Factibilidad de uso de residuos orgánicos para reformulación de receta (relevamiento de zona, análisis de potencialidad de sustratos, y análisis de viabilidad económica).
								'
							/>
							<VSensor text='Logística de sustratos y gestión ante proveedores.' />
							<VSensor text='Reingeniería de plantas y optimización de plantas en operación.' />
						</Flex>
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
