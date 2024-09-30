import { Space, Switch } from 'antd';
import { useUser } from '../hooks/UseUser';

export const SwitchAdmin = () => {
	const { handleChangeToAdmin } = useUser();
	return (
		<Space direction="vertical">
			<Switch
				onChange={handleChangeToAdmin}
				checkedChildren="Admin"
				unCheckedChildren="user"
			/>
		</Space>
	);
};
