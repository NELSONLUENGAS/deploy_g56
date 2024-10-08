import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider';

export const useUser = () => {
	const { user, handleChangeToAdmin } = useContext(UserContext);

	return {
		user,
		handleChangeToAdmin,
	};
};
