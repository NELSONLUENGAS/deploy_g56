import React from 'react';
import { useUser } from '../hooks/UseUser';

const HomePage = () => {
	const { users } = useUser();

	console.log(users);
	return <div>HomePage</div>;
};

export default HomePage;
