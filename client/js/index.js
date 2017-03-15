import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';
import RootContainer from './components/container/root_container';
import EntriesContainer from './components/container/entries_container';
import NewEntryContainer from './components/container/new_entry_container';
import EditEntryContainer from './components/container/edit_entry_container';
import ConfirmationPage from './components/presentational/confirmation_page';
import WelcomePage from './components/presentational/welcome_page';
import 'whatwg-fetch';

const routes = (
  <Provider store={store}>
		<Router history={hashHistory}>
			<Route path = '/' component={WelcomePage} />
			<Route path="/entries" component={RootContainer} />
			<Route path="/entries/:id" component={EditEntryContainer} />
			<Route path="/new_entry" component={NewEntryContainer} />
			<Route path="/confirmation" component={ConfirmationPage} />
		</Router>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
	return ReactDOM.render(
		routes,
		document.getElementById('root')
	);
})

console.log(`Client running in ${process.env.NODE_ENV} mode`);
