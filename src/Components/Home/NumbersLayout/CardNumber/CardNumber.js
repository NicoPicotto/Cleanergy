import React from 'react';
import { Box, Heading, Stack, Text, Flex } from '@chakra-ui/react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const CardNumber = ({ icon, number, text, unidad }) => {
	return (
		<Box padding={6}>
			<Stack alignItems={'center'} color={'white'}>
				<Heading>{icon}</Heading>
				<Flex>
					<Heading>
						<CountUp end={number}>
							{({ countUpRef, start }) => (
								<VisibilitySensor onChange={start}>
									<span ref={countUpRef} />
								</VisibilitySensor>
							)}
						</CountUp>
					</Heading>
					<Text>{unidad}</Text>
				</Flex>
				<Text textAlign={'center'} as={'b'}>
					{text}
				</Text>
			</Stack>
		</Box>
	);
};

export default CardNumber;
