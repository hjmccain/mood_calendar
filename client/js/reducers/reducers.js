import * as actions from '../actions/entries_actions';
import { combineReducers } from 'redux';

function immutableSplice(arr, start, deleteCount, ...items) {
	return [ ...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount) ]
}

const stateInfo = (state = {}, action) => {
	switch (action.type) {
		case actions.SELECT_MOOD:
			return state = Object.assign({}, state, { selected_mood: action.mood });
		case actions.GET_ENTRIES_ERROR:
			return state = Object.assign({}, state, { error: true, error_info: action.error });
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
		case actions.GET_ENTRIES_SUCCESS:
			return state = Object.assign({}, state, action.entries);
		case actions.DELETE_ENTRY_SUCCESS:
			console.log('state before', state);
			const newState = state.entries.map((entry) => {
				if (entry.id !== action.id) return entry;
			}).filter((entry) => {
				if (entry) return entry;
			})
			console.log('state after', newState);
			// return state;
			return state = Object.assign({}, newState);
		default:
			return state;
	}
}

export default combineReducers({
	stateInfo,
	filtersState,
	entriesState
});
