import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

import RootContainer from './components/root_container';
import EntriesContainer from './components/entries_container';

const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/entries" component={RootContainer}>
				<Route path=":entryId" component={EntriesContainer} />
			</Route>
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
