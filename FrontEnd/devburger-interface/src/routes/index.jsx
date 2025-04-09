import { Route, Routes } from 'react-router-dom';
import { UserLayout } from '../layouts/UserLayout';
import { Cart, Checkout, CompletePayment, Home, Login, Menu, Register } from '../pages';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<UserLayout />} >
				<Route path="/" element={<Home />} />
				<Route path="/cardapio" element={<Menu />} />
				<Route path="/carrinho" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/complete" element={<CompletePayment />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/cadastro" element={<Register />} />

		</Routes>
	);
}

/*
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
*/
