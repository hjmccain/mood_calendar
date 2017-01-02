import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/entries_async_actions';
import EditEntryForm from './edit_entry_form';

const mapStateToProps = (state) => ({
	entries: state.entriesState.entries
});

const mapDispatchToProps = (dispatch) => {
  return {
    editEntry: (id, mood, text) => { dispatch(actions.editEntry(id, mood, text)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditEntryForm);
