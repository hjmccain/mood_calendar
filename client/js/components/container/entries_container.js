import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/entries_async_actions';
import Entries from '../presentational/entries';

const mapStateToProps = (state) => ({
	selectedMood: state.stateInfo.selected_mood,
	entries: state.entriesState.entries,
	error: state.stateInfo
});

const mapDispatchToProps = (dispatch) => {
  return {
		getEntries: () => { dispatch(actions.getEntries()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Entries);
