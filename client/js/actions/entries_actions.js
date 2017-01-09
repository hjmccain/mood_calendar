// CRUD

export const GET_ENTRIES_SUCCESS = 'GET_ENTRIES_SUCCESS';
export const getEntriesSuccess = entries => ({
	type: GET_ENTRIES_SUCCESS,
	entries
});

export const GET_ENTRIES_ERROR = 'GET_ENTRIES_ERROR';
export const getEntriesError = error => ({
	type: GET_ENTRIES_ERROR,
	error
});

export const DELETE_ENTRY_SUCCESS = 'DELETE_ENTRY_SUCCESS';
export const deleteEntrySuccess = id => ({
	type: DELETE_ENTRY_SUCCESS,
	id
})

// OTHER

export const SAVE_USER_INPUT = 'SAVE_USER_INPUT';
export const saveUserInput = input => ({
	type: SAVE_USER_INPUT,
	input
});

export const SELECT_MOOD = 'SELECT_MOOD';
export const selectMood = mood => ({
	type: SELECT_MOOD,
	mood
});
