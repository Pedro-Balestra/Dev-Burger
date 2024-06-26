import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { Login } from './pages/Login/index.jsx';
import GlobalStyles from './styles/globalStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Login />
		<GlobalStyles />
		<ToastContainer autoClose={2000} theme="colored" />
	</React.StrictMode>,
);
