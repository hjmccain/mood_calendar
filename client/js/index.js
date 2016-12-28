import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import RootContainer from './components/root_container';

document.addEventListener('DOMContentLoaded', () => {
	return ReactDOM.render(
		<Provider store={store}>
			<RootContainer />
		</Provider>,
		document.getElementById('root')
	);
})

console.log(`Client running in ${process.env.NODE_ENV} mode`);
