import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/entries_actions';
import EditMenu from './edit_menu';

const mapStateToProps = (state, ownProps) => ({
	selected_entry: state.stateInfo.selected_entry,
	id: ownProps.id
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEntry: (id) => {
      dispatch(actions.deleteEntry(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMenu);
