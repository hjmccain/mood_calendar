import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/entries_actions';
import Entries from './entries';

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSubmit: (id) => { dispatch(actions.postNewEntry(id)) }
//   }
// }

export default connect(mapStateToProps)(Entries);
// export default connect(mapStateToProps, mapDispatchToProps)(Entries);
