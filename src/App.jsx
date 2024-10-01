import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { CartProvider } from './context/CartProvider';
import { UserProvider } from './context/UserProvider';
import { AuthGuard } from './guard/AuthGuard';
import HomePage from './views/HomePage';
import { ProductProvider } from './context/ProductProvider';
import { UserLayout } from './layouts/UserLayout';
import ContactPage from './views/ContactPage';
import { AdminLayout } from './layouts/AdminLayout';
import DashboardPage from './views/DashboardPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import ProfilePage from './views/ProfilePage';
import CartPage from './views/CartPage';

function App() {
	return (
		<>
			<ProductProvider>
				<CartProvider>
					<UserProvider>
						<Router>
							<Routes>
								{/* Users routes */}
								<Route
									path="/"
									element={<UserLayout />}
								>
									<Route
										index
										element={<HomePage />}
									/>
									<Route
										path="contact"
										element={<ContactPage />}
									/>
									<Route
										path="login"
										element={<LoginPage />}
									/>
									<Route
										path="register"
										element={<RegisterPage />}
									/>

									<Route
										path="cart"
										element={<CartPage />}
									/>

									{/* AS Outlet */}
									<Route
										path="profile"
										element={<AuthGuard />}
									>
										<Route
											index
											element={<ProfilePage />}
										/>
									</Route>

									{/* As children */}
									{/* <Route
										path="profile"
										element={
											<AuthGuard redirectTo="/login">
												<ProfilePage />
											</AuthGuard>
										}
									/> */}
								</Route>

								{/* admin routes */}
								<Route
									path="/admin"
									element={
										<AuthGuard redirectTo="/login">
											<AdminLayout />
										</AuthGuard>
									}
								>
									<Route
										index
										element={<DashboardPage />}
									/>
								</Route>
							</Routes>
						</Router>
					</UserProvider>
				</CartProvider>
			</ProductProvider>
		</>
	);
}

export default App;
