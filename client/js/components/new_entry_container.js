import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/entries_actions';
import NewEntryForm from './new_entry_form';

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSubmit: (id) => { dispatch(actions.postNewEntry(id)) },
// 		sendUserInput: (input) => { dispatch(actions.saveUserInput(input)) }
//   }
// }

export default connect(mapStateToProps)(NewEntryForm);
// export default connect(mapStateToProps, mapDispatchToProps)(Entries);
