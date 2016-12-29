import * as actions from '../actions/entries_actions';
import { combineReducers } from 'redux';

function immutableSplice(arr, start, deleteCount, ...items) {
	return [ ...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount) ]
}

const stateInfo = (state = {}, action) => {
	switch (action.type) {
		case actions.GET_ENTRIES_ERROR:
			return state = Object.assign({}, state, { error: true, error_info: action.error });
		case actions.SELECT_SINGLE_ENTRY:
			return state = Object.assign({}, state, { error: null, selected_entry: action.id });
		case actions.DESELECT_ENTRY:
			return state = Object.assign({}, state, { error: null, selected_entry: null });
		default:
			return state;
	}
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
		default:
			return state;
	}
	console.log('reducers.js new state', state);
}

export default combineReducers({
	stateInfo,
	filtersState,
	entriesState
});
