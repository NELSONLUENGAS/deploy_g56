import { Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { NavLink } from 'react-router-dom';
import { SwitchAdmin } from './SiwtchAdmin';

export const PokeHeader = () => {
	const handleItemSelected = ({ isActive }) =>
		isActive
			? ' text-center bg-secondary text-white'
			: 'text-center bg-primary text-black';
	return (
		<Header
			style={{
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<div className="demo-logo" />
			<Menu
				theme="dark"
				mode="horizontal"
			>
				<Menu.Item style={{ backgroundColor: 'transparent' }}>
					<NavLink
						className={handleItemSelected}
						to="/"
					>
						Home
					</NavLink>
				</Menu.Item>

				<Menu.Item style={{ backgroundColor: 'transparent' }}>
					<NavLink
						className={handleItemSelected}
						to="/contact"
					>
						Contact Us
					</NavLink>
				</Menu.Item>

				<Menu.Item style={{ backgroundColor: 'transparent' }}>
					<NavLink
						className={handleItemSelected}
						to="/admin"
					>
						Admin Page
					</NavLink>
				</Menu.Item>
			</Menu>
			<SwitchAdmin />
		</Header>
	);
};
