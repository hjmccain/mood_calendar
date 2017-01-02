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

// OTHER

export const SAVE_USER_INPUT = 'SAVE_USER_INPUT';
export const saveUserInput = input => ({
	type: SAVE_USER_INPUT,
	input
})
