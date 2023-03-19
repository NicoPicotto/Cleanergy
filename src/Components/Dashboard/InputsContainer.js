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
				<Text margin={0} fontSize='sm' as='b'>
					Residuos orgánicos revalorizados
				</Text>
				<Input
					value={nuevoResiduo}
					onChange={(e) => setNuevoResiduos(e.target.value)}
					variant='outline'
					_focus={{ bgColor: 'white' }}
					isRequired
				/>
				<Text margin={0} fontSize='sm' as='b'>
					Energía eléc. renovable producida
				</Text>
				<Input
					value={nuevoElectricidad}
					onChange={(e) => setNuevoElectricidad(e.target.value)}
					_focus={{ bgColor: 'white' }}
					isRequired
				/>
				<Text margin={0} fontSize='sm' as='b'>
					ACS Solar instalados
				</Text>
				<Input
					value={nuevoSolar}
					onChange={(e) => setNuevoSolar(e.target.value)}
					variant='outline'
					_focus={{ bgColor: 'white' }}
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
