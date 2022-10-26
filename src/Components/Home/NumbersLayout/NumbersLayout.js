import React from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';
import CardNumber from './CardNumber/CardNumber';
import {
	BsFillLightningChargeFill,
	BsFillTrashFill,
	BsFillSunFill,
} from 'react-icons/bs';
import { GiFootprint } from 'react-icons/gi';

const NumbersLayout = () => {
	const { colorMode } = useColorMode();

	const stats = [
		{
			icon: <BsFillTrashFill size={50} />,
			number: 63035,
			unidad: 'Tn',
			text: 'Residuos Orgánicos Revalorizados',
		},
		{
			icon: <BsFillLightningChargeFill size={50} />,
			number: 15617,
			unidad: 'MWh',
			text: 'Energía Eléctrica Renovable Producida',
		},
		{
			icon: <BsFillSunFill size={50} />,
			number: 3900,
			unidad: 'Lts',
			text: 'ACS Solar Instalados',
		},
		// {
		// 	icon: <GiFootprint size={50} />,
		// 	number: 1550,
		// 	unidad: 'Tn',
		// 	text: 'Toneladas de CO₂ Evitadas',
		// },
	];

	return (
		<Flex
			alignItems={'center'}
			padding={10}
			justifyContent={'space-evenly'}
			flexWrap={'wrap'}
			bgColor={colorMode === 'dark' ? 'gray.600' : 'brand.primario'}
		>
			{stats.map((stat, key) => (
				<CardNumber
					icon={stat.icon}
					number={stat.number}
					unidad={stat.unidad}
					text={stat.text}
					key={key}
				/>
			))}
		</Flex>
	);
};

export default NumbersLayout;
