import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/entries_async_actions';
import EditEntryForm from './edit_entry_form';

const EditEntryContainer = (props) => {

	if (!props.entries) {
		props.getEntries();
		return <div></div>;
	} else {
		const selectedEntry = props.entries.filter((entry) => {
			return entry.id.toString() === props.params.id;
		});

		return (
			<EditEntryForm entry={selectedEntry[0]} editEntry={props.editEntry} id={props.params.id}/>
		)
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
