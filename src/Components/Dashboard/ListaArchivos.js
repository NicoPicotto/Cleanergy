import React, { useState, useEffect, useRef } from 'react';
import {
	Stack,
	Button,
	Spinner,
	useToast,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	FormControl,
	FormLabel,
	Input,
	Progress,
	Flex
} from '@chakra-ui/react';
import {
	query,
	doc,
	deleteDoc,
	where,
	getDocs,
	orderBy,
	collection,
	addDoc,
} from 'firebase/firestore';
import { firestore } from '../../firebase';
import { storage } from '../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import ItemsArchivos from './ItemsArchivos';

const ListaArchivos = ({ seleccionado }) => {
	const [archivos, setArchivos] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const toast = useToast();

	//Parámetros Modal
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [progress, setProgress] = useState(0);
	const [file, setFile] = useState('');
	const [URL, setURL] = useState('');
	const [titulo, setTitulo] = useState('');
	const [fecha, setFecha] = useState('');
	const [submited, setSubmited] = useState(false);
	const initialRef = useRef(null);
	const finalRef = useRef(null);
	const timestamp = Date.parse(fecha);

	useEffect(() => {
		const getReportes = async () => {
			setIsLoading(true);
			const docs = [];
			const q = query(
				collection(firestore, 'archivos'),
				where('idcliente', '==', seleccionado),
				orderBy('fecha', 'desc')
			);
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setArchivos(docs);
			setIsLoading(false);
		};
		getReportes();
	}, [seleccionado, submited]);

	//Función para eliminar reporte
	const handleDelete = async (id) => {
		await deleteDoc(doc(firestore, 'archivos', id));
		toast({
			title: '¡Producto eliminado!',
			status: 'error',
			duration: 7000,
			isClosable: true,
			variant: 'top-accent',
			position: 'top',
		});
	};

	//Función para subir imagenes al storage
	const uploadImage = (e) => {
		const storageRef = ref(storage, `/files/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);
		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const percent = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				); // update progress
				setProgress(percent);
			},
			(err) => console.log(err),
			() => {
				// download url
				getDownloadURL(uploadTask.snapshot.ref).then((url) => {
					setURL(url);
				});
			}
		);
	};

	//Función para cargar el documento
	const handleSubmit = async (e) => {
		setIsLoading(true);
		e.preventDefault();
		if (titulo && URL) {
			await addDoc(collection(firestore, 'archivos'), {
				titulo,
				archivo: URL,
				idcliente: seleccionado,
				fecha: timestamp,
			});
			toast({
				title: '¡Documento cargado con éxito! 😎',
				status: 'success',
				duration: 7000,
				isClosable: true,
				variant: 'top-accent',
				position: 'top',
			});
			setIsLoading(false);
			onClose();
			setTitulo('');
			setFile('');
			setFecha('');
			setURL('');
			setProgress(0);
			setSubmited(!submited);
		} else {
			toast({
				title: 'Tenés campos sin completar.',
				status: 'error',
				duration: 7000,
				isClosable: true,
				variant: 'top-accent',
				position: 'top',
			});
		}
	};

	return (
		<Stack h='100%' justify='space-between' >
			<Flex overflowY='scroll' h="85%" flexDir="column" padding={1} alignItems="center">
				{archivos &&
					archivos.map((arch) => (
						<ItemsArchivos
							id={arch.id}
							titulo={arch.titulo}
							key={arch.id}
							archivo={arch.archivo}
							handleDelete={handleDelete}
							fecha={arch.fecha}
						/>
					))}
				{isLoading && <Spinner color='brand.secundario' />}
			</Flex>
			<Stack h="15%">
				<Button colorScheme="green" onClick={onOpen}>
					Añadir nuevo
				</Button>
			</Stack>
			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent
					fontFamily={'fonts.open'}
					as='form'
					onSubmit={handleSubmit}
				>
					<ModalHeader>Subir nuevo documento</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Titulo del documento</FormLabel>
							<Input
								value={titulo}
								onChange={(e) => setTitulo(e.target.value)}
								placeholder='Titulo'
							/>
						</FormControl>
						<FormControl>
							<FormLabel mt={4}>Fecha</FormLabel>
							<Input
								value={fecha}
								onChange={(e) => setFecha(e.target.value)}
								type='date'
								name='timestamp'
							/>
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>ID Cliente</FormLabel>
							<Input value={seleccionado} isDisabled />
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Archivo</FormLabel>
							<Input
								type='file'
								id='fileInput'
								onChange={(e) => {
									setFile(e.target.files[0]);
								}}
							/>
							{file && (
								<Button
									w='100%'
									marginTop={2}
									onClick={uploadImage}
									bgColor='segundo'
									color='brand.secundario'
								>
									{URL ? '¡Archivo cargado!' : 'Cargar archivo'}
								</Button>
							)}
							{progress > 0 && (
								<Progress
									marginTop={1}
									color={
										progress === 100 ? 'brand.secundario' : 'brand.primario'
									}
									value={progress}
								/>
							)}
						</FormControl>
					</ModalBody>

					<ModalFooter>
						{URL && titulo && fecha ? (
							<Button colorScheme='green' mr={3} type='submit'>
								Subir Documento
							</Button>
						) : (
							<Button colorScheme='green' mr={3} isDisabled>
								Subir Documento
							</Button>
						)}
						<Button onClick={onClose}>Cancelar</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Stack>
	);
};

export default ListaArchivos;
