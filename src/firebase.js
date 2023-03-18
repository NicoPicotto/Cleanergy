import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBZoEA9pIsZLq0bKIlxPA7NySs5mn7ZPf4',
	authDomain: 'clientes-9a336.firebaseapp.com',
	projectId: 'clientes-9a336',
	storageBucket: 'clientes-9a336.appspot.com',
	messagingSenderId: '100667751679',
	appId: '1:100667751679:web:e4944bffa9350f4d7d60ca',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);
