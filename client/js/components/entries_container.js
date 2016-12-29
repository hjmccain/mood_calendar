import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/entries_actions';
import Entries from './entries';

const mapStateToProps = (state) => ({
	selected_entry: state.stateInfo.selected_entry,
	entries: state.entriesState.entries,
	error: state.stateInfo
});

const mapDispatchToProps = (dispatch) => {
  return {
    onEntryMouseOver: (id) => {
      dispatch(actions.selectSingleEntry(id));
    },
		onEntryMouseOut: (id) => {
      dispatch(actions.deSelectEntry(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Entries);
