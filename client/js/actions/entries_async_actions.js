import * as actions from './entries_actions';

const users_url = "/db-users";
const entries_url = "/db-entries";

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
			console.log('async actions delete success');
		}).catch(err => {
			console.log('async actions delete error');
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
