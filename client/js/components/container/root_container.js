import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/entries_async_actions';
import EntriesContainer from '../container/entries_container';
import NewEntryBtn from '../presentational/new_entry_btn';
import MoodDropDown from '../presentational/mood_drop_down';
import HeaderBar from '../presentational/header_bar';

class RootContainer extends React.Component {
  constructor() {
    super();
  }

  componentDidMount () {
    this.props.dispatch(actions.getEntries());
  }

  render () {
    return 	(
      <div className="full-page-container">
        <HeaderBar showOptions={true}/>
        <EntriesContainer />
      </div>
    )
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
