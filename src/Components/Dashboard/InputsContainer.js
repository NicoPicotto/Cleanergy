import React, { useState } from 'react';
import { Stack, Text, Input, Button, Spinner } from '@chakra-ui/react';

const InputsContainer = ({
	isLoading,
	handleUpdate,
	residuos,
	electrica,
	solar,
}) => {
	const [nuevoResiduo, setNuevoResiduos] = useState(residuos);
	const [nuevoElectricidad, setNuevoElectricidad] = useState(electrica);
	const [nuevoSolar, setNuevoSolar] = useState(solar);

	return (
		<Stack spacing={5}>
			<Stack>
				<Text margin={0} fontSize='sm' as='b' color='white'>
					Residuos orgánicos revalorizados
				</Text>
				<Input
					value={nuevoResiduo}
					onChange={(e) => setNuevoResiduos(e.target.value)}
					variant='outline'
					color='white'
					_focus={{ bgColor: 'white', color: 'black' }}
					isRequired
				/>
				<Text margin={0} fontSize='sm' as='b' color='white'>
					Energía eléctrica renovable producida
				</Text>
				<Input
					value={nuevoElectricidad}
					onChange={(e) => setNuevoElectricidad(e.target.value)}
					variant='outline'
					color='white'
					_focus={{ bgColor: 'white', color: 'black' }}
					isRequired
				/>
				<Text margin={0} fontSize='sm' as='b' color='white'>
					ACS Solar instalados
				</Text>
				<Input
					value={nuevoSolar}
					onChange={(e) => setNuevoSolar(e.target.value)}
					variant='outline'
					color='white'
					_focus={{ bgColor: 'white', color: 'black' }}
					isRequired
				/>
			</Stack>
			<Stack>
				<Button
					onClick={() =>
						handleUpdate(nuevoResiduo, nuevoElectricidad, nuevoSolar)
					}
					color='brand.primario'
				>
					{isLoading ? <Spinner color='brand.primario' /> : 'Actualizar'}
				</Button>
			</Stack>
		</Stack>
	);
};

export default InputsContainer;
