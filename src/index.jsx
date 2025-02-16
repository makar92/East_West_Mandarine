import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Layout from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<BrowserRouter
			basename='/ChineseGo/'
		>
			<Layout />
		</BrowserRouter>
	</Provider>,
);
