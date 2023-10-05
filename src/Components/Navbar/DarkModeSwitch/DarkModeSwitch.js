import { useColorMode, IconButton, Tooltip } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Tooltip hasArrow label='¡Ahorremos energía!' fontSize={"xs"} overflowX={"hidden"} placement="left">
			<IconButton
				aria-label='¡Ahorremos energía!'
				icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
				onClick={toggleColorMode}
				variant={'ghost'}
				color={'brand.secundario'}
			/>
		</Tooltip>
	);
};

export default DarkModeSwitch;