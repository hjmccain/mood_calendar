import * as actions from './entries_actions';

const users_url = "/users";
const entries_url = "/entries";

export const entryFetch = (id = '') => dispatch => {
	if (id === '') {
		dispatch(getMultipleEntries());
	} else {
		dispatch(getSingleEntry(id));
	}
}

export const getMultipleEntries = () => dispatch => {
	return fetch(entries_url)
		.then(res => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json();
		}).then(res => {
			dispatch(actions.getMultipleEntriesSuccess(res));
		}).catch(err => {
			dispatch(actions.getEntriesError(err));
		});
}

export const getSingleEntry = (id) => dispatch => {
	return fetch(`${entries_url}/${id}`)
		.then(res => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json();
		}).then(res => {
			dispatch(actions.getSingleEntrySuccess(res));
		}).catch(err => {
			dispatch(actions.getEntriesError(err));
		});
}
