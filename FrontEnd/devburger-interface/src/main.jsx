import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Header } from './components/Header/index.jsx';
import AppProvider from './hooks/inde.jsx';
import { router } from './routes';
import GlobalStyles from './styles/globalStyles.js';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripeConfig.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppProvider>
			<Elements stripe={stripePromise}>
				<RouterProvider router={router} />
			</Elements>
			<GlobalStyles />
			<ToastContainer autoClose={2000} theme="colored" />
		</AppProvider>
	</React.StrictMode>,
);
