import * as actions from './entries_actions';
import moment from 'moment';

const users_url = "/db-users";
const entries_url = "/db-entries";

export const deleteEntry = (id) => dispatch => {
	return fetch(entries_url,
		{
			method: "DELETE",
			body: JSON.stringify({
				id: id
			}),
			headers: {"Content-Type": "application/json"}
		}
	).then(res => {
		if (!res.ok) {
			throw new Error(res.statusText);
		}
	}).then(() => {
		dispatch(actions.deleteEntrySuccess(id));
	}).catch(err => {
		dispatch(actions.accessEntriesError(err));
	});
}

// TODO: add user ID input when user component is added
export const addEntry = (text, mood) => dispatch => {
	const entryBody = {
		text: text,
		date: moment(),
		mood: mood,
		user_id: 1
	}
	return fetch(entries_url,
		{
			method: "POST",
			body: JSON.stringify(entryBody),
			headers: {"Content-Type": "application/json"}
		}
	).then(res => {
		if (!res.ok) {
			throw new Error(res.statusText);
		}
		return res.json();
	}).then(() => {}).catch(err => {
		dispatch(actions.accessEntriesError(err));
	});
}

// TODO: add user ID input when user component is added
export const editEntry = (id, text, mood) => dispatch => {
	const editBody = {
		id: id,
		text: text,
		mood: mood
	}
	return fetch(entries_url,
		{
			method: "PUT",
			body: JSON.stringify(editBody),
			headers: {"Content-Type": "application/json"}
		}
	).then(res => {
		if (!res.ok) {
			throw new Error(res.statusText);
		}
		return res.json();
	}).then(() => {}).catch(err => {
		dispatch(actions.accessEntriesError(err));
	});
}

export const getEntries = () => dispatch => {
	return fetch(entries_url)
		.then(res => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json();
		}).then(res => {
			dispatch(actions.getEntriesSuccess(res));
		}).catch(err => {
			dispatch(actions.accessEntriesError(err));
		});
}
