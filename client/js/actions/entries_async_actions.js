import * as actions from './entries_actions';

const users_url = "/db-users";
const entries_url = "/db-entries";
// const entries_url = "/entrie"; // TODO: error example

// export const entryFetch = (id = '') => dispatch => {
// 	if (id === '') {
// 		dispatch(getMultipleEntries());
// 	} else {
// 		dispatch(getSingleEntry(id));
// 	}
// }

// export const actOnEntry = (entry_id, action) => dispatch => {
// 	if (action === 'Delete') {
// 		dispatch(deleteEntry(entry_id));
// 	} else {
// 		dispatch(editEntry(entry_id));
// 	}
// }

export const deleteEntry = (id) => dispatch => {
	return fetch(entries_url,
		{
			method: "DELETE",
			body: JSON.stringify({ id }),
			headers: {"Content-Type": "application/json"}
		})
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

// export const getSingleEntry = (id) => dispatch => {
// 	return fetch(`${entries_url}/${id}`)
// 		.then(res => {
// 			if (!res.ok) {
// 				throw new Error(res.statusText);
// 			}
// 			return res.json();
// 		}).then(res => {
// 			dispatch(actions.getSingleEntrySuccess(res));
// 		}).catch(err => {
// 			dispatch(actions.getEntriesError(err));
// 		});
// }
