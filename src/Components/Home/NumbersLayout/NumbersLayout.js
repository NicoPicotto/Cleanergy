import React from 'react';
import {
	Flex,
	useColorMode,
	Box,
	Heading,
	Stack,
	Text,
} from '@chakra-ui/react';
import {
	BsFillLightningChargeFill,
	BsFillTrashFill,
	BsFillSunFill,
} from 'react-icons/bs';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const NumbersLayout = () => {
	const { colorMode } = useColorMode();

	return (
		<Flex
			alignItems={'center'}
			padding={10}
			justifyContent={'space-evenly'}
			flexWrap={'wrap'}
			bgColor={colorMode === 'dark' ? 'gray.600' : 'brand.primario'}
		>
			<Box padding={6}>
				<Stack alignItems={'center'} color={'white'}>
					<Heading>
						<BsFillTrashFill size={50} />
					</Heading>
					<Flex>
						<Heading>
							<CountUp end={63035}>
								{({ countUpRef, start }) => (
									<VisibilitySensor onChange={start}>
										<span ref={countUpRef} />
									</VisibilitySensor>
								)}
							</CountUp>
						</Heading>
						<Text>Tn</Text>
					</Flex>
					<Text textAlign={'center'} as={'b'}>
						Residuos Orgánicos Revalorizados
					</Text>
				</Stack>
			</Box>
			<Box padding={6}>
				<Stack alignItems={'center'} color={'white'}>
					<Heading>
						<BsFillLightningChargeFill size={50} />
					</Heading>
					<Flex>
						<Heading>
							<CountUp end={15617}>
								{({ countUpRef, start }) => (
									<VisibilitySensor onChange={start}>
										<span ref={countUpRef} />
									</VisibilitySensor>
								)}
							</CountUp>
						</Heading>
						<Text>MWh</Text>
					</Flex>
					<Text textAlign={'center'} as={'b'}>
						Energía Eléctrica Renovable Producida
					</Text>
				</Stack>
			</Box>
			<Box padding={6}>
				<Stack alignItems={'center'} color={'white'}>
					<Heading>
						<BsFillSunFill size={50} />
					</Heading>
					<Flex>
						<Heading>
							<CountUp end={3900}>
								{({ countUpRef, start }) => (
									<VisibilitySensor onChange={start}>
										<span ref={countUpRef} />
									</VisibilitySensor>
								)}
							</CountUp>
						</Heading>
						<Text>Lts</Text>
					</Flex>
					<Text textAlign={'center'} as={'b'}>
						ACS Solar Instalados
					</Text>
				</Stack>
			</Box>
		</Flex>
	);
};

export default NumbersLayout;
