import * as actions from './entries_actions';

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
		dispatch(actions.getEntriesSuccess());
	}).catch(err => {
		dispatch(actions.getEntriesError(err));
	});
}

// TODO: add user ID input when user component is added
export const addEntry = (text, mood) => dispatch => {
	return fetch(entries_url,
		{
			method: "POST",
			body: JSON.stringify({
				text: text,
				date: new Date(),
				mood: mood
			}),
			headers: {"Content-Type": "application/json"}
		}
	).then(res => {
		if (!res.ok) {
			throw new Error(res.statusText);
		}
		return res.json();
	}).then(res => {
		dispatch(actions.getEntriesSuccess(res));
	}).catch(err => {
		dispatch(actions.getEntriesError(err));
	});
}

// TODO: add user ID input when user component is added
export const editEntry = (id, text, mood) => dispatch => {
	return fetch(entries_url,
		{
			method: "PUT",
			body: JSON.stringify({
				id: id,
				text: text,
				mood: mood
			}),
			headers: {"Content-Type": "application/json"}
		}
	).then(res => {
		if (!res.ok) {
			throw new Error(res.statusText);
		}
		return res.json();
	}).then(res => {
		dispatch(actions.getEntriesSuccess(res));
	}).catch(err => {
		dispatch(actions.getEntriesError(err));
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
			dispatch(actions.getEntriesError(err));
		});
}
