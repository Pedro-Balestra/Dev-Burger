import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppProvider from './hooks/inde.jsx';
import { router } from './routes';
import GlobalStyles from './styles/globalStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppProvider>
			<RouterProvider router={router} />
			<GlobalStyles />
			<ToastContainer autoClose={2000} theme="colored" />
		</AppProvider>
	</React.StrictMode>,
);
