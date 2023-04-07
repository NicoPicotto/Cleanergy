import React, { useState, createContext, useContext, useEffect } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
	onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

export const ClientesContext = createContext({});

export const useAuth = () => {
	const context = useContext(ClientesContext);
	return context;
};

export const ContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [email, setEmail] = useState("")
	const [loading, setLoading] = useState(true);
	const [userUid, setUserUid] = useState("")

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const registrarse = (email, password) => {
		setLoading(true)
		createUserWithEmailAndPassword(auth, email, password);
		setLoading(false)
	};

	const logout = () => {
		signOut(auth);
	};

	const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

	useEffect(() => {
		const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setEmail(currentUser.email)
			setUserUid(currentUser.uid)
			setLoading(false);
		});
		return () => unsubuscribe();
	}, []);

	return (
		<ClientesContext.Provider
			value={{
				login,
				logout,
				registrarse,
				resetPassword,
				loading,
				user,
				email,
				userUid
			}}
		>
			{children}
		</ClientesContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(ClientesContext);
};