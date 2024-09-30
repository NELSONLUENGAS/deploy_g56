import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({ username: '', email: '', token: false });

	const handleChangeToAdmin = () =>
		setUser({
			...user,
			token: !user.token,
		});
	return (
		<UserContext.Provider value={{ user, handleChangeToAdmin }}>
			{children}
		</UserContext.Provider>
	);
};
