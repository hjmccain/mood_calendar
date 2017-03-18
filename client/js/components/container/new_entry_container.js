import React from 'react';
import { connect } from 'react-redux';
import * as asyncActions from '../../actions/entries_async_actions';
import * as actions from '../../actions/entries_actions';
import NewEntryForm from '../presentational/new_entry_form';

const mapStateToProps = (state) => ({
  mood: state.selected_mood
});

const mapDispatchToProps = (dispatch) => {
  return {
    postNewEntry: (text, mood) => { dispatch(asyncActions.addEntry(text, mood)) },
    selectMood: (mood) => { dispatch(actions.selectMood(mood)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEntryForm);
