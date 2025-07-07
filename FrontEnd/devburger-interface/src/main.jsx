import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import AppProvider from './hooks/inde.jsx';
import { Router } from './routes';
import GlobalStyles from './styles/globalStyles.js';
import { standardTheme } from './styles/themes/standard.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={standardTheme}>
			<AppProvider>
					<BrowserRouter>
						<Router></Router>
					</BrowserRouter>
				<GlobalStyles />
				<ToastContainer autoClose={2000} theme="colored" />
			</AppProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
