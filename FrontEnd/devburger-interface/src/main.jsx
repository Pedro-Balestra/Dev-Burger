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
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standard.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={standardTheme}>
			<AppProvider>
				<Elements stripe={stripePromise}>
					<RouterProvider router={router} />
				</Elements>
				<GlobalStyles />
				<ToastContainer autoClose={2000} theme="colored" />
			</AppProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
