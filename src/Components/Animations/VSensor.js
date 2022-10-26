import React from 'react';
import { Flex, Text, SlideFade } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import VisibilitySensor from 'react-visibility-sensor';

const VSensor = ({ text }) => {
	return (
		<VisibilitySensor offset={{ bottom: 100 }} partialVisibility={true}>
			{({ isVisible }) => (
				<SlideFade in={isVisible} offsetX='-30px'>
					<Flex padding={5} alignItems={'center'}>
						<ArrowForwardIcon
							marginRight={3}
							color={'brand.primario'}
							fontSize={'1.5em'}
						/>
						<Text fontFamily={'fonts.open'}>{text}</Text>
					</Flex>
				</SlideFade>
			)}
		</VisibilitySensor>
	);
};

export default VSensor;
