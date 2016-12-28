export const GET_MULTIPLE_ENTRIES_SUCCESS = 'GET_MULTIPLE_ENTRIES_SUCCESS';
export const getMultipleEntriesSuccess = entries => ({
	type: GET_MULTIPLE_ENTRIES_SUCCESS,
	entries
});

export const SELECT_SINGLE_ENTRY = 'SELECT_SINGLE_ENTRY';
export const selectSingleEntry = id => ({
	type: SELECT_SINGLE_ENTRY,
	id
})

export const GET_SINGLE_ENTRY_SUCCESS = 'GET_SINGLE_ENTRY_SUCCESS';
export const getSingleEntrySuccess = entry => ({
	type: GET_SINGLE_ENTRY_SUCCESS,
	entry
});

export const GET_SINGLE_ENTRY = 'GET_SINGLE_ENTRY';
export const getSingleEntry = id => ({
	type: GET_SINGLE_ENTRY,
	id
})

export const GET_ENTRIES_ERROR = 'GET_ENTRIES_ERROR';
export const getEntriesError = error => ({
	type: GET_ENTRIES_ERROR,
	error
});
