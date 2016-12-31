import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/entries_async_actions';
import NewEntryForm from './new_entry_form';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    postNewEntry: (text, mood) => { dispatch(actions.addEntry(text, mood)) }
  }
}

// export default connect(mapStateToProps)(NewEntryForm);
export default connect(mapStateToProps, mapDispatchToProps)(NewEntryForm);
