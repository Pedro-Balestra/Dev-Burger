import { createBrowserRouter } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Menu } from '../pages/Menu';
import { Register } from '../pages/Register';
import { Cart } from '../pages/Cart';

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Header></Header>
				<Home />
				<Footer></Footer>
			</>
		),
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/cadastro',
		element: <Register />,
	},
	{
		path: '/cardapio',
		element: (
			<>
				<Header></Header>
				<Menu />
			</>
		),
	},
	{
		path: '/carrinho',
		element: (
			<>
				<Cart></Cart>
			</>
		),
	},
]);
