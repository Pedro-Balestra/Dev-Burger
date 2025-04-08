import { createBrowserRouter } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Cart, Checkout, CompletePayment, Home, Login, Menu, Register } from '../pages';

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
	{
		path: '/checkout',
		element: <Checkout></Checkout>
	},
	{
		path: '/complete',
		element: <CompletePayment></CompletePayment>
	},
]);
