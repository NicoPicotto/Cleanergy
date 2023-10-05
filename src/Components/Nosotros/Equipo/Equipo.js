import React from 'react';
import {
	Flex,
	Divider,
	useMediaQuery,
	Heading,
	useColorMode,
} from '@chakra-ui/react';
import persons from './Persons.json';
import PersonCard from './PersonCard';

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
				{persons.map((person, index) => (
					<PersonCard
						key={index}
						name={person.name}
						image={person.image}
						position={person.position}
						description={person.description}
					/>
				))}
			</Flex>
		</Flex>
	);
};

export default Equipo;
