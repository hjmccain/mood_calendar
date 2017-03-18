import React from 'react';
import { connect } from 'react-redux';
import * as asyncActions from '../../actions/entries_async_actions';
import * as actions from '../../actions/entries_actions';
import EditEntryForm from '../presentational/edit_entry_form';

const EditEntryContainer = (props) => {
	const { entries, getEntries, editEntry, params } = props;

	if (!entries) {
		getEntries();
		return <div></div>;
	} else {
		const entry = entries.filter((entry) => entry.id.toString() === params.id);
		return <EditEntryForm selectMood={props.selectMood} entry={entry[0]} editEntry={editEntry} id={params.id}/>
	}
}

const mapStateToProps = (state) => ({
	entries: state.entriesState.entries
});

const mapDispatchToProps = (dispatch) => {
  return {
		getEntries: () => {dispatch(asyncActions.getEntries()) },
    editEntry: (id, mood, text) => { dispatch(asyncActions.editEntry(id, mood, text)) },
    selectMood: (mood) => { dispatch(actions.selectMood(mood)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEntryContainer);
