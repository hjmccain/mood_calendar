import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/entries_async_actions';
import EditEntryForm from './edit_entry_form';

const EditEntryContainer = (props) => {
	const { entries, getEntries, editEntry, params } = props;

	if (!entries) {
		getEntries();
		return <div></div>;
	} else {
		const entry = entries.filter((entry) => entry.id.toString() === params.id);
		return <EditEntryForm entry={entry[0]} editEntry={editEntry} id={params.id}/>
	}

}

const mapStateToProps = (state) => ({
	entries: state.entriesState.entries
});

const mapDispatchToProps = (dispatch) => {
  return {
		getEntries: () => {dispatch(actions.getEntries()) },
    editEntry: (id, mood, text) => { dispatch(actions.editEntry(id, mood, text)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEntryContainer);
