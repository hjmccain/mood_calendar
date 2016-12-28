import * as actions from '../actions/entries_actions';
import { combineReducers } from 'redux';

function immutableSplice(arr, start, deleteCount, ...items) {
	return [ ...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount) ]
}

const filtersState = (state = {}, action) => {
	switch (action.type) {
		case actions.GET_SINGLE_ENTRY:
			return state = Object.assign({}, state, { selected_entry: action.id });
		default:
			return state;
	}
}

const entriesState = (state = {}, action) => {
	switch (action.type) {
		case actions.GET_MULTIPLE_ENTRIES_SUCCESS:
			return state = Object.assign({}, state, action.entries);
		case actions.GET_SINGLE_ENTRY_SUCCESS:
			return state;
		case actions.GET_ENTRIES_ERROR:
			return state;
		default:
			return state;
	}
	console.log('reducers.js new state', state);
}

export default combineReducers({
	filtersState,
	entriesState
});
