import { createContext, useContext, useEffect, useState } from 'react';

const { VITE_API_URL } = import.meta.env;

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({ username: '', email: '', token: false });
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		try {
			const response = await fetch(`${VITE_API_URL}/api/users/all`);
			const json = await response.json();

			setUsers(json);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const handleChangeToAdmin = () =>
		setUser({
			...user,
			token: !user.token,
		});
	return (
		<UserContext.Provider value={{ user, handleChangeToAdmin, users }}>
			{children}
		</UserContext.Provider>
	);
};
