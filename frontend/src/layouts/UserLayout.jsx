import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { PokeHeader } from '../components/PokeHeader';
import { PokeFooter } from '../components/PokeFooter';
const { Content } = Layout;

export const UserLayout = () => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<PokeHeader />
			<Content className="p-3">
				<div
					style={{
						background: colorBgContainer,
						minHeight: 280,
						padding: 24,
						borderRadius: borderRadiusLG,
					}}
				>
					<Outlet />
				</div>
			</Content>
			<PokeFooter />
		</Layout>
	);
};
