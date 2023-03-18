import React, { useState } from 'react';
import { useAuth } from '../../Context/Context';
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
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import DarkModeSwitch from './DarkModeSwitch/DarkModeSwitch';

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = useState('top');
	const { colorMode } = useColorMode();
	const navigate = useNavigate();
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	const { userUid, user, logout } = useAuth();

	const handleLogout = async () => {
		onClose()
		try {
			await logout();
			navigate('/');
		} catch (e) {
			console.log('Logout');
		}
	};

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
								<Link to={'/nosotros'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										Nosotros
									</Button>
								</Link>
								<Link to={'/biogas'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										Servicios Biogás
									</Button>
								</Link>
								<Link to={'/solarTermico'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										Servicios Solar Termico
									</Button>
								</Link>
								<Link to={'/solarFotovoltaico'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										Servicios Solar Fotovoltáico
									</Button>
								</Link>
								<Link to={'/residuos'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										Servicios Gestión de Residuos
									</Button>
								</Link>
								<Link to={'/proyectos'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										Proyectos
									</Button>
								</Link>
								<Link to={user ? `/usuario/${userUid}` : '/login'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										Acceso clientes
									</Button>
								</Link>
								{user && <Button colorScheme='red' variant={'ghost'} onClick={handleLogout}>Salir de mi cuenta</Button>}
								<DarkModeSwitch />
							</ButtonGroup>
						</DrawerContent>
					</Drawer>
				</>
			) : (
				<Box>
					<ButtonGroup spacing={4} flexDirection={'row'}>
						<Link to={'/nosotros'}>
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
								<Link to={'/biogas'}>
									<MenuItem color={'brand.primario'}>Biogás</MenuItem>
								</Link>
								<Link to={'/solarTermico'}>
									<MenuItem color={'brand.primario'}>Solar Térmico</MenuItem>
								</Link>
								<Link to={'/solarFotovoltaico'}>
									<MenuItem color={'brand.primario'}>
										Solar Fotovoltáico
									</MenuItem>
								</Link>
								<Link to={'/residuos'}>
									<MenuItem color={'brand.primario'}>
										Gestión de residuos
									</MenuItem>
								</Link>
							</MenuList>
						</Menu>
						<Link to={'/proyectos'}>
							<Button color={'brand.primario'} variant={'ghost'}>
								Proyectos
							</Button>
						</Link>
						<Link to={user ? `/usuario/${userUid}` : '/login'}>
							<Button color={'brand.primario'} variant={'ghost'}>
								Acceso clientes
							</Button>
						</Link>
						{user && <Button colorScheme='red' variant={'ghost'} onClick={handleLogout}>Salir de mi cuenta</Button>}
						<DarkModeSwitch />
					</ButtonGroup>
				</Box>
			)}
		</Flex>
	);
};

export default Navbar;
