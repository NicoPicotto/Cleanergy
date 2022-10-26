import React, {useState} from 'react'
import {
	Flex,
	Box,
	Button,
	ButtonGroup,
	Menu,
	MenuButton,
	Image,
	MenuList,
	MenuItem,
	useDisclosure,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	useColorMode,
	useMediaQuery,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import DarkModeSwitch from './DarkModeSwitch/DarkModeSwitch';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = useState('top');
	const { colorMode } = useColorMode();
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
	<Flex
			height={'10vh'}
			alignItems={'center'}
			justifyContent={'space-between'}
			padding={10}
			pos={'sticky'}
			top={0}
			bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
			zIndex={100}
			boxShadow={'md'}
		>
            <Box>
				<Link to={'/'}>
					<Image
						src='/logo.png'
						alt='Logo Cleanergy'
						objectFit='cover'
						width={'15em'}
						cursor={'pointer'}
					/>
				</Link>
			</Box>
			{isMobile === true ? (
				<>
					<Button onClick={onOpen}>
						<HamburgerIcon color={'brand.primario'} />
					</Button>

					<Drawer
						placement={placement}
						onClose={onClose}
						isOpen={isOpen}
						zIndex={200}
					>
						<DrawerOverlay />
						<DrawerContent>
							<ButtonGroup
								justifyContent={'center'}
								alignItems={'center'}
								flexDirection={'column'}
								size={'lg'}
								padding={5}
							>
								<Link href={'/nosotros'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										Nosotros
									</Button>
								</Link>
								<Link href={'/serviciosBiogas'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										Servicios Biogás
									</Button>
								</Link>
								<Link href={'/serviciosSolarTermico'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										Servicios Solar Termico
									</Button>
								</Link>
								<Link href={'/serviciosSolarFotovoltaico'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										Servicios Solar Fotovoltáico
									</Button>
								</Link>
								<Link href={'/serviciosResiduos'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										Servicios Gestión de Residuos
									</Button>
								</Link>
								<Link href={'/proyectos'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										Proyectos
									</Button>
								</Link>
								<DarkModeSwitch />
							</ButtonGroup>
						</DrawerContent>
					</Drawer>
				</>
			) : (
				<Box>
					<ButtonGroup spacing={4} flexDirection={'row'}>
						<Link href={'/nosotros'}>
							<Button color={'brand.primario'} variant={'ghost'}>
								Nosotros
							</Button>
						</Link>
						<Menu>
							<MenuButton
								as={Button}
								rightIcon={<ChevronDownIcon color={'brand.primario'} />}
								color={'brand.primario'}
								variant={'ghost'}
							>
								Servicios
							</MenuButton>
							<MenuList>
								<Link href={'/serviciosBiogas'}>
									<MenuItem color={'brand.primario'}>Biogás</MenuItem>
								</Link>
								<Link href={'/serviciosSolarTermico'}>
									<MenuItem color={'brand.primario'}>Solar Térmico</MenuItem>
								</Link>
								<Link href={'/serviciosSolarFotovoltaico'}>
									<MenuItem color={'brand.primario'}>
										Solar Fotovoltáico
									</MenuItem>
								</Link>
								<Link href={'/serviciosResiduos'}>
									<MenuItem color={'brand.primario'}>
										Gestión de residuos
									</MenuItem>
								</Link>
							</MenuList>
						</Menu>
						<Link href={'/proyectos'}>
							<Button color={'brand.primario'} variant={'ghost'}>
								Proyectos
							</Button>
						</Link>
						<DarkModeSwitch />
					</ButtonGroup>
				</Box>
			)}
        </Flex>
	);
};

export default Navbar