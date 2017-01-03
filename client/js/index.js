import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';
import RootContainer from './components/root_container';
import EntriesContainer from './components/entries_container';
import NewEntryContainer from './components/new_entry_container';
import EditEntryContainer from './components/edit_entry_container';

const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/entries" component={RootContainer} />
			<Route path="/entries/new_entry" component={NewEntryContainer} />
			<Route path="/entries/:id" component={EditEntryContainer} />
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
