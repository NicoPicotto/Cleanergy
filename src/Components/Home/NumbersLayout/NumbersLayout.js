import React, {useState, useEffect} from 'react';
import {
	Flex,
	useColorMode,
	Box,
	Heading,
	Stack,
	Text,
} from '@chakra-ui/react';
import { getDoc, doc } from 'firebase/firestore';
import { firestore } from "../../../firebase";
import {
	BsFillLightningChargeFill,
	BsFillTrashFill,
	BsFillSunFill,
} from 'react-icons/bs';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const NumbersLayout = () => {
	const { colorMode } = useColorMode();
	const [numeros, setNumeros] = useState(null)

	useEffect(() => {
		const getNumeros = async () => {
			const docRef = doc(firestore, 'numeros', "tiF3BJeOfNCa6JC1Rho9");
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				setNumeros(docSnap.data());
			} else {
				console.log('Error al traer los datos del usuario');
			}
		};
		getNumeros();
	}, []);

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
							<CountUp end={numeros && numeros.residuos}>
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
							<CountUp end={numeros && numeros.electrica}>
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
							<CountUp end={numeros && numeros.solar}>
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
