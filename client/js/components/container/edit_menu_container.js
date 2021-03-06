import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/entries_async_actions';
import EditMenu from '../presentational/edit_menu';

const mapStateToProps = (state, ownProps) => ({
	id: ownProps.id,
	entries: state.entriesState.entries
});

const mapDispatchToProps = (dispatch) => {
  return {
		getEntries: () => { dispatch(actions.getEntries()) },
    deleteEntry: (id) => { dispatch(actions.deleteEntry(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMenu);
