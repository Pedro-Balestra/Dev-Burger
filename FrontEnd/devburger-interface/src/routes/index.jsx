import { Elements } from '@stripe/react-stripe-js';
import { Route, Routes } from 'react-router-dom';
import stripePromise from '../config/stripeConfig';
import { AdminLayout } from '../layouts/AdminLayout';
import { UserLayout } from '../layouts/UserLayout';
import { Cart, Checkout, CompletePayment, EditProduct, Home, Login, Menu, NewProduct, Orders, Products, Register } from '../pages';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<UserLayout />} >
				<Route path="/" element={<Home />} />
				<Route path="/cardapio" element={<Menu />} />
				<Route path="/carrinho" element={<Cart />} />
				<Route path="/checkout" element={<Elements stripe={stripePromise}>
					<Checkout />
				</Elements>
				} />
				<Route path="/complete" element={<Elements stripe={stripePromise}>
					<CompletePayment />
				</Elements>
				} />
			</Route>
			<Route path='/admin' element={<AdminLayout />}>
				<Route path="/admin/pedidos" element={<Orders />} />
				<Route path="/admin/novo-produto" element={<NewProduct />} />
				<Route path="/admin/editar-produto" element={<EditProduct />} />
				<Route path="/admin/produtos" element={<Products />} />
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
