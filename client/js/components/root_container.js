import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/entries_async_actions';
import AllEntriesContainer from './all_entries_container';

class RootContainer extends React.Component {
	constructor() {
		super();
	}

	componentDidMount () {
		this.props.dispatch(actions.entryFetch());
	}

	render () {
		return (
			<AllEntriesContainer />
		)
	}
}

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
