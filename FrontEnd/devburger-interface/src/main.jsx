import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login } from './pages/Login/index.jsx';
import GlobalStyles from './styles/globalStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Login />
		<GlobalStyles />
	</React.StrictMode>,
);
