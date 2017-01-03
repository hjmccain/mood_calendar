import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/entries_async_actions';
import EntriesContainer from './entries_container';
import NewEntryBtn from './new_entry_btn';
import MoodDropDown from './mood_drop_down';
import HeaderBar from './header_bar';

class RootContainer extends React.Component {
	constructor() {
		super();
	}

	componentDidMount () {
		this.props.dispatch(actions.getEntries());
	}

	render () {
		return (
			<div>
				<HeaderBar />
				<EntriesContainer />
			</div>
		)
	}
}

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
