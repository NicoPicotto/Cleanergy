import React from 'react';
import { Flex, Divider, Heading, useMediaQuery } from '@chakra-ui/react';

const SectionsLanding = ({ bgImage, title }) => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Flex
			bgImage={bgImage}
			height={'40vh'}
			bgRepeat={'no-repeat'}
			backgroundAttachment={isMobile ? null : 'fixed'}
			bgSize={'cover'}
			backgroundPosition={'bottom'}
			overflowX={'hidden'}
		>
			<Flex
				alignItems={'center'}
				width={'100vw'}
				justifyContent={'center'}
				overflowX={'hidden'}
			>
				<Flex
					width={'70vw'}
					padding={10}
					alignItems={'center'}
					gap={2}
					justifyContent={isMobile && 'center'}
				>
					<Divider orientation='vertical' h={'5em'} borderWidth={2} />
					<Heading
						color={'white'}
						size={'4xl'}
						textShadow={'2px 2px 4px #000000'}
						fontFamily={'fonts.open'}
					>
						{title}
					</Heading>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default SectionsLanding;
